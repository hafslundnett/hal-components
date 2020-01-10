import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { FeedbackExtras } from './feedback-extras';

@Component({
  selector: 'hal-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  animations: [
    trigger('feedbackAnimation', [
      state(
        'void',
        style({
          height: 0,
          opacity: 0
        })
      ),
      state(
        'visible',
        style({
          height: '*',
          opacity: 1,
        })
      ),
      transition('visible <=> void', animate(`600ms cubic-bezier(0.6, 0, 0.1, 1)`))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackComponent {
  private onDestroy = new Subject();
  private durationTimeoutId: any;

  @Input() message: string;
  @Input() extras: FeedbackExtras;
  @Output() destroyed = new EventEmitter<void>();
  onDestroy$ = this.onDestroy.asObservable();
  animationState: 'visible' | 'void' = 'visible';

  animateClose(): void {
    this.animationState = 'void';
    clearTimeout(this.durationTimeoutId);
  }

  /**
   * This is called after the animation is done by Angular
   * The state decides whether the component should be destroyed or not
   */
  animationDone() {
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
