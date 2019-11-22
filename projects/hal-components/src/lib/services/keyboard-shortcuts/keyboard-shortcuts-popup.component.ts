import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { KeyInUse } from './key-in-use.interface';
import { KeyName } from './key-name.enum';
import { Subscription, Subject } from 'rxjs';
import { POPUP_GLOBAL_DATA, PopupGlobalService } from '../popup-global/popup-global.service';

interface KeyShortcutElement {
  keyCombo: string;
  description: string;
}

@Component({
  selector: 'hal-keyboard-shortcuts-popup',
  templateUrl: './keyboard-shortcuts-popup.component.html',
  styleUrls: ['./keyboard-shortcuts-popup.component.scss'],
  providers: [PopupGlobalService]
})
export class KeyboardShortcutsPopupComponent implements OnInit, OnDestroy {

  private onDestroy = new Subject();
  onDestroy$ = this.onDestroy.asObservable();
  private subscriptions: Subscription = new Subscription();

  keyCombos: KeyInUse[];
  keyShortcuts: KeyShortcutElement[] = [];

  constructor(
    @Inject(POPUP_GLOBAL_DATA) public data: KeyInUse[],
  ) {
    this.keyCombos = this.data;
  }

  ngOnInit() {
    console.log(this.keyCombos);
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
