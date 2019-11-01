import { Component, OnInit } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { PopupGlobalService } from 'hal-components';
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
      apiInput: 'openOverlay(overlayRef, overlayComponent)',
      description: 'Opens the overlay(popup) by passing the OverlayRef and the overlayComponent to display.'},
    {apiInput: 'detach(overlayRef)', description: 'Detaches the overlay by passing the OverlayRef.'}
  ];

  tsCode = `openPopupGlobal() {
    const overlayRef: OverlayRef = this.popupGlobalService.setupOverlay('50%');
    const compInstance = this.popupGlobalService.openOverlay(
      overlayRef,
      PopupGlobalExampleComponent
    );
    overlayRef.backdropClick().subscribe(next => {
      this.popupGlobalService.detach(overlayRef);
    });
    compInstance.onDestroy$.subscribe(() => {
      this.popupGlobalService.detach(overlayRef);
    });
  }`;

  constructor(private popupGlobalService: PopupGlobalService) { }

  ngOnInit() {
  }


  openPopupGlobal() {
    const overlayRef: OverlayRef = this.popupGlobalService.setupOverlay('50%');
    const compInstance = this.popupGlobalService.openOverlay(overlayRef, PopupGlobalExampleComponent);
    overlayRef.backdropClick().subscribe(next => {
      this.popupGlobalService.detach(overlayRef);
    });
    compInstance.onDestroy$.subscribe(() => {
      this.popupGlobalService.detach(overlayRef);
    });
  }

}
