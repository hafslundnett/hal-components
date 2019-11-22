import { Injectable } from '@angular/core';
import { fromEvent, Subject, Observable } from 'rxjs';
import { filter, finalize, map } from 'rxjs/operators';
import { KeyName } from './key-name.enum';
import { KeyInUse } from './key-in-use.interface';
import { PopupGlobalService } from '../popup-global/popup-global.service';

import { KeyboardShortcutsPopupComponent } from './keyboard-shortcuts-popup.component';
import { KeyboardShortcutsPopupModule } from './keyboard-shortcuts-popup.module';

interface KeyboardKey {
  keyName: string;
  ctrlDown: boolean;
  altDown: boolean;
  shiftDown: boolean;
}

@Injectable({
  providedIn: KeyboardShortcutsPopupModule
})
export class KeyboardShortcutsService {

  openKeyboardShortcutsOverview = new Subject<KeyInUse[]>();
  private overlayRef;

  // key is this.getMapKey()
  private keysInUse = new Map<string, KeyInUse>();
  private keyEvents = new Subject<KeyboardKey>();

  constructor(
    private popupGlobalService: PopupGlobalService,
  ) {
    fromEvent(document, 'keydown').subscribe({
      next: (event: KeyboardEvent) => {
        this.newKeyEvent(event);
      }
    });

    this.subForKeyboardShortcutsOverview();

    this.openKeyboardShortcutsOverview.subscribe({
      next: (keyInUse: KeyInUse[]) => this.openKeyboardShortcuts(keyInUse)
    });
  }

  getKeyEventsForKey(
    keyName: KeyName,
    description: string,
    requireCtrl: boolean,
    requireShift: boolean,
    requireAlt: boolean,
  ): Observable<null> {
    const mapKey = this.getMapKey(keyName, requireCtrl, requireShift, requireAlt);
    const keyEvents = this.keyEvents.pipe(
      filter(current => {
        return current.keyName === keyName
          && current.ctrlDown === requireCtrl
          && current.shiftDown === requireShift
          && current.altDown === requireAlt;
      }),
      map((current) => null), // no need to send back any data
      finalize(() => {
        this.removeFromKeysInUse(mapKey);
      })
    );

    if (this.keysInUse.has(mapKey)) {
      console.warn('Key combo in use! ' + mapKey);
    }

    this.keysInUse.set(mapKey, {
      keyName,
      ctrlDown: requireCtrl,
      altDown: requireAlt,
      shiftDown: requireShift,
      description
    });

    return keyEvents;
  }

  private subForKeyboardShortcutsOverview() {
    // no need to unsub as it is in use always
    this.getKeyEventsForKey(KeyName.Space, 'Åpne tastatursnarveier', true, false, false).subscribe({
      next: () => {
        this.openKeyboardShortcutsOverview.next(Array.from(this.keysInUse.values()));
      }
    });
  }

  private removeFromKeysInUse(mapKey: string) {
    this.keysInUse.delete(mapKey);
  }

  private getMapKey(keyName: KeyName, requireCtrl: boolean, requireShift: boolean, requireAlt: boolean): string {
    const separator = '-';
    let extraKeys = '';
    if (requireCtrl) {
      extraKeys += 'ctrl' + separator;
    }
    if (requireShift) {
      extraKeys += 'shift + separator';
    }
    if (requireAlt) {
      extraKeys += 'alt' + separator;
    }
    return extraKeys + keyName;
  }

  private newKeyEvent(event: KeyboardEvent) {
    const keyboardKey: KeyboardKey = {
      altDown: event.altKey,
      shiftDown: event.shiftKey,
      ctrlDown: event.ctrlKey,
      keyName: event.key.toLowerCase() as KeyName
    };
    this.keyEvents.next(keyboardKey);
  }

  private openKeyboardShortcuts(keyInUse: KeyInUse[])  {
    // if already open, close it
    if (this.overlayRef) {
      this.popupGlobalService.detach(this.overlayRef);
      this.overlayRef = null;
      return;
    }
    this.overlayRef = this.popupGlobalService.setupOverlay();
    const compInstance = this.popupGlobalService.openOverlay(this.overlayRef, KeyboardShortcutsPopupComponent, keyInUse);
    this.overlayRef.backdropClick().subscribe(next => {
      this.popupGlobalService.detach(this.overlayRef);
    });
    compInstance.onDestroy$.subscribe(() => {
      this.popupGlobalService.detach(this.overlayRef);
    });
  }

}
