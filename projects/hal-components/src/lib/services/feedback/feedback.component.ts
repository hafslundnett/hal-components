import { Component, ViewEncapsulation, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { FeedbackExtras } from './feedback-extras';
import { feedbackAnimation } from './feedback-animations';

@Component({
  selector: 'hal-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  animations: [feedbackAnimation],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackComponent implements OnInit {
  private onDestroy = new Subject();
  private durationTimeoutId: any;

  @Input() message: string;
  @Input() extras: FeedbackExtras;
  // Notifies the feedbacklist that the element i removed.
  @Output() destroyed = new EventEmitter<void>();
  onDestroy$ = this.onDestroy.asObservable();
  animationState: 'visible' | 'void' = 'visible';

  constructor() { }

  ngOnInit() {
  }

  animateClose(): void {
    this.animationState = 'void';
    clearTimeout(this.durationTimeoutId);
  }

  /**
   * This is called after the animation is done by Angular
   * The state decides whether the component should be destroyed or not
   */

  animationDone(): void {
    if (this.animationState === 'void') {
      this.onDestroy.next();
      this.onDestroy.complete();
      this.destroyed.emit();
    } else if (this.animationState === 'visible') {
      if (this.extras) {
        this.dismissAfter(this.extras.duration);
      }
    }
  }

  private dismissAfter(duration: number): void {
    if (duration && duration > 0) {
      this.durationTimeoutId = setTimeout(() => this.animateClose(), duration);
    }
  }
}
