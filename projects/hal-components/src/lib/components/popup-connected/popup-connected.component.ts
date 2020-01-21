import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CdkOverlayOrigin, ConnectionPositionPair, ScrollStrategy, Overlay } from '@angular/cdk/overlay';
import { popUpAnimation } from '../../animations';
export type popupPosition = 'above' | 'below';

@Component({
  selector: 'hal-popup-connected',
  templateUrl: './popup-connected.component.html',
  styleUrls: ['./popup-connected.component.scss'],
  animations: [popUpAnimation]
})
export class PopupConnectedComponent implements OnInit, OnChanges {

  @Input() small = false;
  @Input() isOpen = false;
  @Input() relativePositionY: popupPosition = 'below';
  @Input() origin: CdkOverlayOrigin;
  @Input() alignedRight = false;

  @Output() popupClose: EventEmitter<void> = new EventEmitter();

  scrollStrategy: ScrollStrategy = this.overlay.scrollStrategies.reposition();
  position: ConnectionPositionPair;

  constructor(private overlay: Overlay) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.position = this.getPosition();
  }

  getPosition() {
    if (this.relativePositionY === 'above' && this.alignedRight === false) {
      return this.getPositionTopLeft();
    } else if (this.relativePositionY === 'above' && this.alignedRight === true) {
      return this.getPositionTopRight();
    } else if (this.relativePositionY === 'below' && this.alignedRight === false) {
      return this.getPositionBottomLeft();
    } else if (this.relativePositionY === 'below' && this.alignedRight === true) {
      return this.getPositionBottomRight();
    } else {
      return this.getPositionBottomLeft();
    }
  }

  getPositionTopLeft() {
    return new ConnectionPositionPair(
      { originX: 'end', originY: 'top' },
      { overlayX: 'end', overlayY: 'bottom' }
    );
  }
  getPositionTopRight() {
    return new ConnectionPositionPair(
      { originX: 'start', originY: 'top' },
      { overlayX: 'start', overlayY: 'bottom' }
    );
  }
  getPositionBottomLeft() {
    return new ConnectionPositionPair(
      { originX: 'end', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'top' }
    );
  }
  getPositionBottomRight() {
    return new ConnectionPositionPair(
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'start', overlayY: 'top' }
    );
  }

  onClose() {
    this.isOpen = false;
    this.popupClose.emit();
  }
}
