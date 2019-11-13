import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FeedbackComponent } from './feedback.component';

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
