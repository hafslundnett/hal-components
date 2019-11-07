import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'hal-popup-global-example',
  templateUrl: './popup-global-example.component.html',
  styleUrls: ['./popup-global-example.component.scss']
})
export class PopupGlobalExampleComponent implements OnInit, OnDestroy {

  private onDestroy = new Subject();
  onDestroy$ = this.onDestroy.asObservable();

  private subscriptions: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onClose() {
    this.onDestroy.next();
  }

}
