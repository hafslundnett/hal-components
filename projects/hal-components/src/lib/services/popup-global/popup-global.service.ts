import { Injectable, ComponentRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';

@Injectable()
export class PopupGlobalService {

  constructor(private overlay: Overlay) {

  }

  setupOverlay(maxWidth = '50%'): OverlayRef {
    return this.overlay.create({
      hasBackdrop: true,
      maxWidth,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    });
  }

  /** Remember to handle on destroy for popup and call detach */
  openOverlay<PopupCompType>(overlayRef: OverlayRef, overlayComponent: ComponentType<PopupCompType>): PopupCompType {
    if (overlayRef.hasAttached()) {
      overlayRef.detach();
    }
    const portal = new ComponentPortal(overlayComponent);
    const componentRef = overlayRef.attach(portal);
    return componentRef.instance;
  }

  detach(overlayRef: OverlayRef): void {
    overlayRef.detach();
  }

}
