import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-popup-connected-doc',
  templateUrl: './popup-connected-doc.component.html',
  styleUrls: ['./popup-connected-doc.component.scss']
})
export class PopupConnectedDocComponent implements OnInit {

  popupIsOpen = false;
  popupTopIsOpen = false;

  apiTableRows: ApiTableRow[] = [
    { apiInput: '[isOpen]', description: 'Input for determening wether the popup is open or closed.' },
    { apiInput: '[origin]', description: 'Input for setting origin for what element the popup should connect to.' },
    {
      apiInput: '[small]',
      description: 'Input for setting the popups size to small. If true the close button will be removed to allow for more space.'
    },
    {
      apiInput: '[relativePositionY]',
      description: 'Optional input to change the position of the popup in relation to the element its connected to. Options: above, bottom.'
    },
    {
      apiInput: '(popupClose)',
      description:
        'Output that closes the popup if the a condition is set to true. The popup will close on default by clicking the close button.'
    },
  ];

  directiveRows: ApiTableRow[] = [
    { apiInput: 'CdkOverlayOrigin', description: 'Directive applied to an element to make it usable as an origin for an Overlay.' }
  ];

  // tslint:disable-next-line:max-line-length
  htmlCode = `<button type="button" (click)="popupIsOpen = !popupIsOpen" class="hdd-button" cdkOverlayOrigin #popupTrigger="cdkOverlayOrigin">
  <span>Open connected popup</span>
</button>
<hal-popup-connected [isOpen]="popupIsOpen" [origin]="popupTrigger" (popupClose)="popupIsOpen = false">
  <hal-popup-connected-example></hal-popup-connected-example>
</hal-popup-connected>`;

  constructor() { }

  ngOnInit() {
  }

}
