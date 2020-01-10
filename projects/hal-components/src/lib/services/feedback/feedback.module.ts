import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FeedbackComponent } from './feedback.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  declarations: [FeedbackComponent, FeedbackListComponent ],
  entryComponents: [FeedbackComponent, FeedbackListComponent ]
})
export class FeedbackModule { }
