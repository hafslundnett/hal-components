import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CdkOverlayOrigin, ConnectionPositionPair, ScrollStrategy, Overlay } from '@angular/cdk/overlay';
import { scaleUp } from '../../animations';
export type popupPosition = 'above' | 'below';

// Is missing support for relativePositionX (horisontal). Add if needed

@Component({
  selector: 'hal-popup-connected',
  templateUrl: './popup-connected.component.html',
  styleUrls: ['./popup-connected.component.scss'],
  animations: [ scaleUp ]
})
export class PopupConnectedComponent implements OnInit {

  position: ConnectionPositionPair = new ConnectionPositionPair(
    { originX: 'end', originY: 'bottom' },
    { overlayX: 'end', overlayY: 'top' }
  );

  @Input() small = false;
  @Input() isOpen = false;
  @Input()
  get relativePositionY(): popupPosition {
    return this._relativePositionY;
  }
  set relativePositionY(relativePositionY: popupPosition) {
    if (!relativePositionY) {
      relativePositionY = 'below'; // default
    }
    this._relativePositionY = relativePositionY;
    this.newValuerelativePositionY();
  }

  @Input() origin: CdkOverlayOrigin;

  @Output() close: EventEmitter<void> = new EventEmitter();

  scrollstrategy: ScrollStrategy = this.overlay.scrollStrategies.reposition();

  private _relativePositionY: popupPosition = 'below';

  constructor(private overlay: Overlay) {}

  ngOnInit() {
  }

  newValuerelativePositionY() {
    if (this.relativePositionY === 'above') {
      this.position = new ConnectionPositionPair(
        { originX: 'end', originY: 'top' },
        { overlayX: 'end', overlayY: 'bottom' }
      );
    } else if (this.relativePositionY === 'below') {
      this.position = new ConnectionPositionPair(
        { originX: 'end', originY: 'bottom' },
        { overlayX: 'end', overlayY: 'top' }
      );
    }
  }

  onClose() {
    this.isOpen = false;
    this.close.emit();
  }
}
