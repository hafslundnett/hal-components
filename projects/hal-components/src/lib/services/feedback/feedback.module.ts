import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  declarations: [ FeedbackComponent ],
  entryComponents: [ FeedbackComponent ],
  exports: [FeedbackComponent]
})
export class FeedbackModule { }
