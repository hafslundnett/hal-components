import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { curtainDown, POPUP_GLOBAL_DATA } from '@hafslundnett/hal-components';

@Component({
  selector: 'hal-popup-global-example',
  templateUrl: './popup-global-example.component.html',
  styleUrls: ['./popup-global-example.component.scss'],
  animations: [curtainDown],
})
export class PopupGlobalExampleComponent implements OnInit, OnDestroy {

  private onDestroy = new Subject();
  onDestroy$ = this.onDestroy.asObservable();

  private subscriptions: Subscription = new Subscription();

  constructor(
    @Inject(POPUP_GLOBAL_DATA) public extraData: string,
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onClose() {
    this.onDestroy.next();
  }

}
