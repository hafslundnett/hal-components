/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, ComponentFixture, getTestBed } from '@angular/core/testing';
import { PopupGlobalService } from './popup-global.service';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  template: `
    <div>testcomponent</div>
  `
})
class TestComponent {}

describe('Service: PopupGlobal', () => {

  let injector: TestBed;
  let popupGlobalService: PopupGlobalService;
  let testComponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let overlayRef: OverlayRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopupGlobalService, Overlay],
      declarations: [TestComponent],
    });

    injector = getTestBed();
    popupGlobalService = injector.get(PopupGlobalService);
    overlayRef = popupGlobalService.setupOverlay();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('service should exist', inject([PopupGlobalService], (service: PopupGlobalService) => {
    expect(service).toBeTruthy();
  }));

  // EntryComponents støttes ikke i angular 8, må vente til angular 9
  /* xdescribe('Attach component to OverlayRef', () => {
    beforeEach(() => {
      popupGlobalService.openOverlay(overlayRef, testComponent);
      fixture.detectChanges();
    });

    it('hasAttached should be true', () => {
      expect(overlayRef.hasAttached()).toBe(true);
    });
  }); */

  /* xdescribe('Detach component to OverlayRef', () => {
    beforeEach(() => {
      popupGlobalService.openOverlay(overlayRef, testComponent);
      popupGlobalService.detach(overlayRef);
      fixture.detectChanges();
    });

    it('hasAttached should be false', () => {
      expect(overlayRef.hasAttached()).toBe(false);
    });
  }); */

});
