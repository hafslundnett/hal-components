import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges, NgZone } from '@angular/core';
import { CdkOverlayOrigin, ConnectionPositionPair, ScrollStrategy, Overlay } from '@angular/cdk/overlay';
import { popUpAnimation } from '../../animations';
import { topLeft, topRight, bottomLeft, bottomRight } from './poup-connections-positions.constants';
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
  @Input() origin: CdkOverlayOrigin;
  @Input() alignTop = false;
  @Input() alignRight = false;

  @Output() popupClose: EventEmitter<void> = new EventEmitter();

  scrollStrategy: ScrollStrategy = this.overlay.scrollStrategies.reposition();
  position: ConnectionPositionPair[];

  currentTopAlignment = false;
  currentRightAlignment = false;

  constructor(private overlay: Overlay, public zone: NgZone) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.position = this.getPosition();
  }

  getPosition(): ConnectionPositionPair[] {
    if (this.alignTop === true && this.alignRight === false) {
      return this.getPositionTopLeft();
    } else if (this.alignTop === true && this.alignRight === true) {
      return this.getPositionTopRight();
    } else if (this.alignTop === false && this.alignRight === false) {
      return this.getPositionBottomLeft();
    } else if (this.alignTop === false && this.alignRight === true) {
      return this.getPositionBottomRight();
    } else {
      return this.getPositionBottomLeft();
    }
  }

  getPositionTopLeft(): ConnectionPositionPair[] {
    return [topLeft, topRight, bottomLeft, bottomRight];
  }
  getPositionTopRight(): ConnectionPositionPair[] {
    return [topRight, topLeft, bottomRight, bottomLeft];
  }
  getPositionBottomLeft(): ConnectionPositionPair[] {
    return [bottomLeft, bottomRight, topLeft, topRight];
  }
  getPositionBottomRight(): ConnectionPositionPair[] {
    return [bottomRight, bottomLeft, topRight, topLeft];
  }

  onClose() {
    this.isOpen = false;
    this.popupClose.emit();
  }

  onPositionChange(connectionPairInUse: ConnectionPositionPair) {
    const currentPostion = JSON.stringify(connectionPairInUse);
    if (currentPostion.includes(`"originY":"top"`)) {
      this.zone.run(() => this.currentTopAlignment = true);
    } else {
      this.zone.run(() => this.currentTopAlignment = false);
    }
    if (currentPostion.includes(`"originX":"start"`)) {
      this.zone.run(() => this.currentRightAlignment = true);
    } else {
      this.zone.run(() => this.currentRightAlignment = false);
    }
  }
}
