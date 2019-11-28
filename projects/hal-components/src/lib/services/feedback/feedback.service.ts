import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

import { FeedbackModule } from './feedback.module';
import { FeedbackComponent } from './feedback.component';
import { FeedbackExtras } from './feedback-extras';

@Injectable({
  providedIn: FeedbackModule
})
export class FeedbackService {
  private overlayRef: OverlayRef;
  private readonly DEFAULT_EXTRAS: FeedbackExtras = {
    severity: 'error',
    closable: true,
    duration: 8000
  };

  constructor(private overlay: Overlay) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global().right().top(),
      panelClass: 'overlay-container'
    });
  }

  showMessage(message: string, extras?: FeedbackExtras): void {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
    const portal = new ComponentPortal(FeedbackComponent);
    const componentRef = this.overlayRef.attach(portal);
    const feedbackComponent = componentRef.instance;
    feedbackComponent.message = message;
    feedbackComponent.extras = { ...this.DEFAULT_EXTRAS, ...extras };
    feedbackComponent.onDestroy$.subscribe(() => {
      this.overlayRef.detach();
    });
  }
}
