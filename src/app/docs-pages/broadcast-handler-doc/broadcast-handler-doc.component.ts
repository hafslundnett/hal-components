import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';
import { BroadcastHandlerService, ChannelAction, ChannelPacket } from 'hal-components';

@Component({
  selector: 'hal-broadcast-handler-doc',
  templateUrl: './broadcast-handler-doc.component.html',
  styleUrls: ['./broadcast-handler-doc.component.scss']
})
export class BroadcastHandlerDocComponent implements OnInit {

  api: ApiTableRow[] = [
    { apiInput: 'getChannelMessages', description: 'Get messages on one channel as an Observable' },
    { apiInput: 'sendMessageChannel', description: 'Send message without checking if it was received' },
    { apiInput: 'sendMessageChannelWithAck', description: 'Send message and check if it was received within ackWaitTime' },
    { apiInput: 'closeChannel', description: 'Close one underlying channel. Usually better to just unsub from the getChannelMessages' },
    { apiInput: 'closeAllChannels', description: 'Close all underlying channel' },
  ];

  tsCode = `// Getting messages
this.broadcastHandlerService.getChannelMessages(this.channelName).subscribe({
  next: (message) => {
    console.log('New message!', message.message);
  }
});

// Sending message
const packet: ChannelPacket = {
  message: 'Hello You'
};
this.broadcastHandlerService.sendMessageChannel(this.channelName, packet);
`;

  channelName = 'test-channel';

  constructor(private broadcastHandlerService: BroadcastHandlerService) { }

  ngOnInit() {
    console.log('Looking for messages...');
    const sub = this.broadcastHandlerService.getChannelMessages(this.channelName).subscribe({
      next: (message) => {
        console.log('New message!', message.message);
      }
    });
  }

  sendMessage() {
    console.log('Sending message');
    const packet: ChannelPacket = {
      message: 'Hello You'
    };
    this.broadcastHandlerService.sendMessageChannelWithAck(this.channelName, packet).subscribe({
      next: (received: boolean) => {
        if (received) {
          console.log('Someone received it :)');
        } else {
          console.log('No one received it :(');
        }
      }
    });
  }

}
