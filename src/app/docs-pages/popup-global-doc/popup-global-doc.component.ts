import { Component, OnInit } from '@angular/core';
import { OverlayRef, OverlayConfig, Overlay } from '@angular/cdk/overlay';
import { PopupGlobalService } from '@hafslundnett/hal-components';
import { PopupGlobalExampleComponent } from './popup-global-example/popup-global-example.component';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-popup-global-doc',
  templateUrl: './popup-global-doc.component.html',
  styleUrls: ['./popup-global-doc.component.scss']
})
export class PopupGlobalDocComponent implements OnInit {

  public apiTableRows: ApiTableRow[] = [
    {apiInput: 'setupOverlay(maxWidth)', description: 'Sets the max-width of the popup.'},
    {
      apiInput: 'openOverlay(overlayRef, overlayComponent, data?)',
      // tslint:disable-next-line:max-line-length
      description: 'Opens the overlay(popup) by passing the OverlayRef and the overlayComponent to display. Extra data can be passed optionally, a injector will be made that should be injected in the receiving component.'},
    {apiInput: 'detach(overlayRef)', description: 'Detaches the overlay by passing the OverlayRef.'}
  ];

  tsCode = `openPopupGlobal() {
  const extraData = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  const overlayRef: OverlayRef = this.popupGlobalService.setupOverlay('50%');
  const compInstance = this.popupGlobalService.openOverlay(overlayRef, PopupGlobalExampleComponent, extraData);
  overlayRef.backdropClick().subscribe(next => {
    this.popupGlobalService.detach(overlayRef);
  });
  compInstance.onDestroy$.subscribe(() => {
    this.popupGlobalService.detach(overlayRef);
  });
}`;

  tsCodeExample = `private onDestroy = new Subject();
onDestroy$ = this.onDestroy.asObservable();

private subscriptions: Subscription = new Subscription();

constructor(
  @Inject(POPUP_GLOBAL_DATA) public extraData: string,
) {}

ngOnDestroy() {
  this.subscriptions.unsubscribe();
}

onClose() {
  this.onDestroy.next();
}`;

  htmlCode = `<div class="animation-wrapper" @curtainDown role="dialog">
  <div class="filter-popup-body" cdkTrapFocus cdkTrapFocusAutoCapture>
    <div class="top-bar">
      <h2>Popup works!</h2>
      <button class="close-button" (click)="onClose()">
        Lukk
        <i class="fal fa-times"></i>
      </button>
    </div>
    <div class="doc-info">
      {{ extraData }}
    </div>
  </div>
</div>`;

  constructor(private popupGlobalService: PopupGlobalService) { }

  ngOnInit() {
  }

  openPopupGlobal() {
    const extraData = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    const overlayRef: OverlayRef = this.popupGlobalService.setupOverlay('50%');
    const compInstance = this.popupGlobalService.openOverlay(overlayRef, PopupGlobalExampleComponent, extraData);
    overlayRef.backdropClick().subscribe(next => {
      this.popupGlobalService.detach(overlayRef);
    });
    compInstance.onDestroy$.subscribe(() => {
      this.popupGlobalService.detach(overlayRef);
    });
  }

}
