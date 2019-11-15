import { NgModule } from '@angular/core';

import { FeedbackService } from './feedback.service';
import { FeedbackServiceMock } from './feedback.service.mock';

@NgModule({
  providers: [
    { provide: FeedbackService, useClass: FeedbackServiceMock }
  ]
})
export class FeedbackTestingModule { }
