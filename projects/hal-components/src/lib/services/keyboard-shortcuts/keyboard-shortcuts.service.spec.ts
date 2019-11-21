/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KeyboardShortcutsService } from './keyboard-shortcuts.service';

describe('Service: KeyboardShortcuts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyboardShortcutsService]
    });
  });

  it('should ...', inject([KeyboardShortcutsService], (service: KeyboardShortcutsService) => {
    expect(service).toBeTruthy();
  }));
});
