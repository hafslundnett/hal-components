import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { KeyboardShortcutsService } from '@hafslundnett/hal-components';
import { KeyName } from '@hafslundnett/hal-components';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-keyboard-shortcuts-doc',
  templateUrl: './keyboard-shortcuts-doc.component.html',
  styleUrls: ['./keyboard-shortcuts-doc.component.scss']
})
export class KeyboardShortcutsDocComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();

  apiTableRows: ApiTableRow[] = [
    {
      apiInput: 'enableKeyboardShortcuts()',
      description: 'Enables the keyboard-shortcuts. Should be called on application startup'
    },
    {
      apiInput: 'getKeyEventsForKey(keyName, description, requireCtrl, requireShift, requireAlt)',
      // tslint:disable-next-line:max-line-length
      description: 'Adds new keyboard-shortcut for the component its called in. The three last values past are booleans for possible keys to press to enable the shortcut-event'
    }
  ];

  tsCode = `ngOnInit() {
  this.keyboardShortcutsService.enableKeyboardShortcuts();

  this.subscriptions.add(
    this.keyboardShortcutsService.getKeyEventsForKey(
      KeyName.A,
      'Send a greeting to the console log!',
      true,
      false,
      false
    ).subscribe({
      next: () => {
        this.greet();
      }
    })
  );
}`;

  constructor(private keyboardShortcutsService: KeyboardShortcutsService) { }

  ngOnInit() {
    this.keyboardShortcutsService.enableKeyboardShortcuts();

    this.subscriptions.add(
      this.keyboardShortcutsService.getKeyEventsForKey(
        KeyName.A,
        'Send a greeting to the console log!',
        true,
        false,
        false
      ).subscribe({
        next: () => {
          this.greet();
        }
      })
    );
  }

  greet() {
    console.log('hei');
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
