import { Injectable, Injector } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType, PortalInjector } from '@angular/cdk/portal';
import { POPUP_GLOBAL_DATA } from './popup-global-data.token';

@Injectable({
  providedIn: 'root'
})
export class PopupGlobalService {

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }

  setupOverlay(maxWidth = '50%'): OverlayRef {
    return this.overlay.create({
      hasBackdrop: true,
      maxWidth,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    });
  }

  /** Remember to handle on destroy for popup and call detach */
  openOverlay<PopupCompType>(overlayRef: OverlayRef, overlayComponent: ComponentType<PopupCompType>, data?: any) {
    const portal = new ComponentPortal(overlayComponent, null, this.createInjector(data));
    const componentRef = overlayRef.attach(portal);
    return componentRef.instance;
  }

  detach(overlayRef: OverlayRef): void {
    overlayRef.detach();
  }

  // tslint:disable-next-line:max-line-length
  /** Creating injector to pass data to the overlayComponent. This injector is passed with the portal and accessed through InjectionToken (POPUP_GLOBAL_DATA). */
  createInjector(dataToPass): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(POPUP_GLOBAL_DATA, dataToPass);
    return new PortalInjector(this.injector, injectorTokens);
  }

}
