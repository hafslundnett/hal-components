import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeedbackElement } from '../feedback-element.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'hal-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss']
})
export class FeedbackListComponent implements OnInit, OnDestroy {

  feedbackMessageList: FeedbackElement[] = [];

  messageDestroyed$ = new Subject<number>();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.messageDestroyed$.complete();
  }

  setMessage(newMessages: FeedbackElement[]) {
    this.feedbackMessageList = newMessages;
  }

  messageDestroyed(id: number) {
    this.messageDestroyed$.next(id);
  }

  trackByFunction(index: number, item: any) {
    return item.id;
  }
}
