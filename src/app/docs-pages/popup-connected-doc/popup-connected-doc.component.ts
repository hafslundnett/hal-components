import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-popup-connected-doc',
  templateUrl: './popup-connected-doc.component.html',
  styleUrls: ['./popup-connected-doc.component.scss']
})
export class PopupConnectedDocComponent implements OnInit {

  isOpenEx = false;
  isOpenEx2 = false;

  apiTableRows: ApiTableRow[] = [
    { apiInput: '[isOpen]', description: 'Input for determening wether the popup is open or closed.' },
    { apiInput: '[origin]', description: 'Input for setting origin for what element the popup should connect to.'},
    { apiInput: '(close)', description: 'Output that closes the popup if the a condition is set to true. The popup will close on default by clicking the close button.' },
    { apiInput: '[small]', description: 'Input for setting the popups size to small. If true the close button will be removed to allow for more space.'},
    { apiInput: '[relativePositionY]', description: 'Optional input to change the position of the popup in relation to the element its connected to. Options: above, bottom.' },
  ];

  directiveRows: ApiTableRow[] = [
    { apiInput: 'CdkOverlayOrigin', description: 'Directive applied to an element to make it usable as an origin for an Overlay.'}
  ]

  htmlCode = `<button type="button" (click)="isOpenEx = !isOpenEx" class="hdd-button" cdkOverlayOrigin #trigger="cdkOverlayOrigin">
  <span>Open connected popup</span>
</button>
<hal-popup-connected [isOpen]="isOpenEx" [origin]="trigger" [relativePositionY]="'below'" (close)="isOpenEx = false">
  <div class="popup-content-wrapper" *ngIf="isOpenEx">
    <div class="hdd-card popup-container">
      <div class="hdd-card_header">
        <div class="hdd-card_header_text">
          <div class="hdd-card_title">It works!</div>
          <div class="hdd-card_subtitle">This is a card</div>
        </div>
      </div>
      <div class="hdd-card_content">
        <p>The card is displayed inside the popup.</p>
      </div>
    </div>
  </div>
</hal-popup-connected>`;

  constructor() { }

  ngOnInit() {
  }

}
