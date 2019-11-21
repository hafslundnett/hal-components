import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { KeyInUse } from '../../services/keyboard-shortcuts/key-in-use.interface';
import { KeyName } from '../../services/keyboard-shortcuts/key-name.enum';
import { Subscription, Subject } from 'rxjs';

interface KeyShortcutElement {
  keyCombo: string;
  description: string;
}

@Component({
  selector: 'hal-keyboard-shortcuts-popup',
  templateUrl: './keyboard-shortcuts-popup.component.html',
  styleUrls: ['./keyboard-shortcuts-popup.component.scss']
})
export class KeyboardShortcutsPopupComponent implements OnInit, OnDestroy {

  private onDestroy = new Subject();
  onDestroy$ = this.onDestroy.asObservable();
  private subscriptions: Subscription = new Subscription();

  keyCombos: KeyInUse[];
  keyShortcuts: KeyShortcutElement[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: KeyInUse[],
  ) {
    this.keyCombos = this.data;
  }

  ngOnInit() {
    this.keyCombos.forEach(current => {
      this.keyShortcuts.push({
        keyCombo: this.getKeyComboString(current),
        description: current.description
      });
    });
  }

  getKeyComboString(key: KeyInUse): string {
    const separator = '-';
    let extraKeys = '';
    if (key.ctrlDown) {
      extraKeys += 'ctrl' + separator;
    }
    if (key.shiftDown) {
      extraKeys += 'shift + separator';
    }
    if (key.altDown) {
      extraKeys += 'alt' + separator;
    }
    // space needs to be more readable
    if (key.keyName === KeyName.Space) {
      return extraKeys + 'space';
    }
    return extraKeys + key.keyName;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onClose() {
    this.onDestroy.next();
  }

}
