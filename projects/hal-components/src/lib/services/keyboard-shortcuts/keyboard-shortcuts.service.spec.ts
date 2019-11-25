/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KeyboardShortcutsService } from './keyboard-shortcuts.service';
import { OverlayModule } from '@angular/cdk/overlay';

describe('Service: KeyboardShortcuts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        OverlayModule
      ],
      providers: [KeyboardShortcutsService]
    });
  });

  it('should ...', inject([KeyboardShortcutsService], (service: KeyboardShortcutsService) => {
    expect(service).toBeTruthy();
    expect((service as any).enabled).toBeFalsy();
    service.enableKeyboardShortcuts();
    expect((service as any).enabled).toBeTruthy();
  }));

});

// function newDocumentKeyEvent(key: string) {
//   const event: Event = new KeyboardEvent('keydown', {
//     key
//   });
//   document.dispatchEvent(event);
// }
