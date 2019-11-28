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
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    });
  }

  /** Remember to handle on destroy for popup and call detach */
  openOverlay<PopupCompType>(overlayRef: OverlayRef, overlayComponent: ComponentType<PopupCompType>, data?: any) {
    // To make scrollStrategies.block() work as expected (https://github.com/angular/components/issues/15051)
    document.body.style.overflowY = 'visible';

    const portal = new ComponentPortal(overlayComponent, null, this.createInjector(data));
    const componentRef = overlayRef.attach(portal);
    return componentRef.instance;
  }

  detach(overlayRef: OverlayRef): void {
    overlayRef.detach();
    document.body.style.overflowY = 'scroll';
  }

  // tslint:disable-next-line:max-line-length
  /** Creating injector to pass data to the overlayComponent. This injector is passed with the portal and accessed through InjectionToken (POPUP_GLOBAL_DATA). */
  createInjector(dataToPass): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(POPUP_GLOBAL_DATA, dataToPass);
    return new PortalInjector(this.injector, injectorTokens);
  }

}
