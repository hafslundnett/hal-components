import { ConnectionPositionPair } from '@angular/cdk/overlay';

export const topLeft: ConnectionPositionPair = {
    originX: 'end',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'bottom'
};

export const topRight: ConnectionPositionPair = {
    originX: 'start',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'bottom'
};

export const bottomLeft: ConnectionPositionPair = {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'top'
};

export const bottomRight: ConnectionPositionPair = {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top'
};
