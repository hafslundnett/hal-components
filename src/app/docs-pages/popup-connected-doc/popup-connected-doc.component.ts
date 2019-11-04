import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-popup-connected-doc',
  templateUrl: './popup-connected-doc.component.html',
  styleUrls: ['./popup-connected-doc.component.scss']
})
export class PopupConnectedDocComponent implements OnInit {

  isOpenEx = false;

  apiTableRows: ApiTableRow[] = [
    { apiInput: '[isOpen]', description: 'Input for determening wether the popup is open or closed.' },
    { apiInput: '[origin]', description: 'Input for setting origin for what element the popup should connect to.'},
    { apiInput: '(close)', description: '' },
    { apiInput: '[relativePositionY]', description: 'Optional input to change the position of the popup in relation to the element its connected to. Options: above, bottom' },
  ];

  htmlCode = `<button type="button" (click)="isOpenEx = !isOpenEx" class="hdd-button" cdkOverlayOrigin #trigger="cdkOverlayOrigin">
  <span>Click me</span>
</button>
<hal-popup-connected [isOpen]="isOpenEx" [origin]="trigger" [relativePositionY]="'below'" (close)="isOpenEx = false">
  <div class="popup-content-wrapper" *ngIf="isOpenEx">
    <div class="hdd-card">
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
