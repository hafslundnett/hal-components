import { FeedbackExtras } from './feedback-extras';
import { Injectable } from "@angular/core";

@Injectable()
export class FeedbackServiceMock {
  showMessage(message: string, extras?: FeedbackExtras): void { }
}
