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
  }));
});
