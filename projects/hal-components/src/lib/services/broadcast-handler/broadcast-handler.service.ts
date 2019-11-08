import { Injectable } from '@angular/core';
import { ChannelPacket } from './broadcast-handler-types';
import { Observable, interval, race, Subject, Subscription, Subscriber, timer } from 'rxjs';
import { take, map, tap, filter, finalize } from 'rxjs/operators';

interface ActiveChannel {
  messages: Subject<ChannelPacket>;
  subscription: Subscription;
  channel: BroadcastChannel;
}

type BroadcastHandlerChannels = string;

/*
 ACK(Acknowledgement) is used for confirming that a sendt message was received
*/

@Injectable({
  providedIn: 'root'
})
export class BroadcastHandlerService {
  // Consider adding ability to close channels (that auto completes all getChannelMessages subscriptions)

  public readonly ackWaitTime = 1000; // consider lowering
  public readonly ackWaitTimeExtra = 5000; // consider increasing

  // do it simple for now. Improve if problems
  private mySenderId = (Math.random() * 10000000).toString();

  private readonly channelPrefix = 'BHSC-';
  private activeChannels: ActiveChannel[] = [];

  constructor() { }

  /** Filters out ACK messages
   * Closes underlying channel on unsubscribe
   */
  getChannelMessages(channelName: BroadcastHandlerChannels): Observable<ChannelPacket> {
    return this.getChannelObject(channelName).messages.pipe(
      filter(message => !message.acknowledgingPreviousMessage),
      finalize(() => {
        console.log('yoo');
        this.closeChannel(channelName);
      })
    );
  }

  /** Send message without checking if it was received */
  sendMessageChannel(channelName: BroadcastHandlerChannels, message: ChannelPacket, setNewMessageId: boolean = true): void {
    const updatedMessage = {
      ...message,
      needAck: false
    };
    if (setNewMessageId) {
      updatedMessage.messageId = this.getRandId();
    }
    this.getChannel(channelName).postMessage(updatedMessage);
  }

  /** Send message and check if it was received
   * Use extraLongWait if message is sendt at script startup (under heavy load)
   */
  sendMessageChannelWithAck(
    channelName: BroadcastHandlerChannels,
    message: ChannelPacket,
    sendingAsMaster = true,
    extraLongWait = false
  ): Observable<boolean> {
    const updatedMessage = {
      ...message,
      needAck: true,
      senderId: this.getMySenderId(sendingAsMaster),
      messageId: this.getRandId()
    };
    // give time for sub to response
    setTimeout(() => {
      this.getChannel(channelName).postMessage(updatedMessage);
    });
    return this.getSendMessageAck(channelName, updatedMessage, extraLongWait);
  }

  /** Close one underlying channel. Usually better to just unsub from the getChannelMessages */
  closeChannel(channelName: BroadcastHandlerChannels) {
    this.getChannelObject(channelName).subscription.unsubscribe();
    this.activeChannels = this.activeChannels.filter(channel => channel.channel.name !== this.getChannelFullName(channelName));
  }

  /** Close all underlying channel */
  closeAllChannels() {
    this.activeChannels.forEach(channel => channel.subscription.unsubscribe());
    this.activeChannels = [];
  }

  private getMySenderId(asMaster: boolean) {
    return asMaster ? 'master-' + this.mySenderId : 'slave-' + this.mySenderId;
  }

  private getRandId() {
    return Math.floor(Math.random() * 10000000);
  }

  /** Only ACK messages */
  private getChannelMessagesAck(channelName: BroadcastHandlerChannels): Observable<ChannelPacket> {
    return this.getChannelObject(channelName).messages.pipe(filter(message => {
      return message.acknowledgingPreviousMessage === true;
    }));
  }

  // will next false if ack takes more time than interval
  private getSendMessageAck(channelName: BroadcastHandlerChannels, sentMessage: ChannelPacket, extraLongWait): Observable<boolean> {
    const waitTime = extraLongWait ? this.ackWaitTimeExtra : this.ackWaitTime;
    return new Observable(observer => {
      race(
        this.getChannelMessagesAck(channelName).pipe(
          filter((ackMessage: ChannelPacket) => {
            if (ackMessage.targetId === sentMessage.senderId && ackMessage.messageId === sentMessage.messageId) {
              observer.next(true);
              observer.complete();
              return true;
            } else {
              return false;
            }
          })
        ),
        interval(waitTime).pipe(
          tap(() => {
            observer.next(false);
            observer.complete();
          })
        )
      ).pipe(take(1)).subscribe();
    });
  }

  // gets open if present or returns a new and stores it
  private getChannel(channelName: BroadcastHandlerChannels): BroadcastChannel {
    return this.getChannelObject(channelName).channel;
  }

  private getChannelFullName(channelName: BroadcastHandlerChannels): string {
    return this.channelPrefix + channelName;
  }

  private getChannelObject(channelName: BroadcastHandlerChannels): ActiveChannel {
    const channelFullName: string = this.getChannelFullName(channelName);
    const cachedChannel: ActiveChannel | undefined = this.activeChannels.find(current => current.channel.name === channelFullName);
    let channelObject: ActiveChannel;

    if (!cachedChannel) {
      channelObject = this.createNewChannel(channelFullName, channelName);
    } else {
      channelObject = cachedChannel;
    }
    return channelObject;
  }

  private createNewChannel(channelFullName: string, channelName: BroadcastHandlerChannels): ActiveChannel {
    const channel: BroadcastChannel = new BroadcastChannel(channelFullName);
    const messagesSubject = new Subject<ChannelPacket>();

    // emitting messages one time via a subject as onmessage only emits once for each channel
    const sub = this.getChannelRawMessages(channel, channelName).subscribe(message => {
      messagesSubject.next(message);
    });

    const channelObject: ActiveChannel = {
      channel,
      messages: messagesSubject,
      subscription: sub
    };
    this.activeChannels.push({
      channel,
      messages: messagesSubject,
      subscription: sub
    });
    return channelObject;
  }

  private getChannelRawMessages(channel: BroadcastChannel, channelName: BroadcastHandlerChannels): Observable<ChannelPacket> {
    return new Observable((observer: Subscriber<ChannelPacket>) => {
      channel.onmessage = (messageEvent: MessageEvent) => {
        this.onNewChannelRawMessage(messageEvent, observer, channelName);
      };
      channel.onmessageerror = (error) => {
        console.warn('onmessageerror: ', error);
      };
      return () => channel.close();
    });
  }

  private onNewChannelRawMessage(messageEvent: MessageEvent, observer: Subscriber<ChannelPacket>, channelName: BroadcastHandlerChannels) {
    const receivedMessage: ChannelPacket = messageEvent.data;
    if (receivedMessage.needAck && !receivedMessage.acknowledgingPreviousMessage) {
      this.respondAck(receivedMessage, channelName);
    }
    observer.next(receivedMessage);
  }

  private respondAck(receivedMessage: ChannelPacket, channelName: BroadcastHandlerChannels) {
    const acknowledgementMessage: ChannelPacket = {
      ...receivedMessage,
      acknowledgingPreviousMessage: true,
      targetId: receivedMessage.senderId,
      senderId: this.getMySenderId(false)
    };
    this.sendMessageChannel(channelName, acknowledgementMessage, false);
  }

}
