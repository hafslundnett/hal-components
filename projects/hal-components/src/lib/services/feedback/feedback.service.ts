import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

import { FeedbackModule } from './feedback.module';
import { FeedbackExtras } from './feedback-extras';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackElement } from './feedback-element.interface';

@Injectable({
  providedIn: FeedbackModule
})
export class FeedbackService {
  private feedbackList: FeedbackListComponent | null;
  private overlayRef: OverlayRef;
  private readonly DEFAULT_EXTRAS: FeedbackExtras = {
    severity: 'error',
    closable: true,
    duration: 8000
  };
  private feedbackMessages: FeedbackElement[] = [];
  private incrementalMessageId = 0;

  constructor(private overlay: Overlay) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global().right().top('var(--hdd-spacing-7)'),
      panelClass: 'overlay-container'
    });
  }

  showMessage(message: string, extras?: FeedbackExtras): void {
    const newMessage: FeedbackElement = {
      message,
      extras: {
        ...this.DEFAULT_EXTRAS,
        ...extras
      },
      id: this.incrementalMessageId++
    };
    this.feedbackMessages.push(newMessage);
    if (!this.feedbackList) {
      this.feedbackList = this.openFeedbackList();
    }
    this.feedbackList.setMessage(this.feedbackMessages);
  }

  openFeedbackList(): FeedbackListComponent {
    const portal = new ComponentPortal(FeedbackListComponent);
    const componentRef = this.overlayRef.attach(portal);
    const feedbackList = componentRef.instance;

    // No need to unsubscribe as stream completes when feedbacklist is destroyed
    feedbackList.messageDestroyed$.subscribe({
      next: (id) => this.removeMessageById(id)
    });
    return feedbackList;
  }

  closeFeedbackList(): void {
    this.overlayRef.detach();
    this.feedbackList = null;
  }

  removeMessageById(id: number): void {
    this.feedbackMessages = this.feedbackMessages.filter(currentmessage => currentmessage.id !== id);
    if (this.feedbackMessages.length === 0) {
      this.closeFeedbackList();
    }
    if (this.feedbackList) {
      this.feedbackList.setMessage(this.feedbackMessages);
    }
  }
}
