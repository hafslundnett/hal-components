import { Component, OnInit } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { PopupGlobalService } from 'hal-components';
import { PopupGlobalExampleComponent } from './popup-global-example/popup-global-example.component';

@Component({
  selector: 'hal-popup-global-doc',
  templateUrl: './popup-global-doc.component.html',
  styleUrls: ['./popup-global-doc.component.scss']
})
export class PopupGlobalDocComponent implements OnInit {

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
