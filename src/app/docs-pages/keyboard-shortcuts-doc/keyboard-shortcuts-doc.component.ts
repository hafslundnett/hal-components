import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { KeyboardShortcutsService } from '@hafslundnett/hal-components';
import { KeyName } from '@hafslundnett/hal-components';

@Component({
  selector: 'hal-keyboard-shortcuts-doc',
  templateUrl: './keyboard-shortcuts-doc.component.html',
  styleUrls: ['./keyboard-shortcuts-doc.component.scss']
})
export class KeyboardShortcutsDocComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();

  constructor(private keyboardShortcutsService: KeyboardShortcutsService) { }

  ngOnInit() {
  }

  setupKeyboardShortcuts() {
    this.subscriptions.add(
      this.keyboardShortcutsService.getKeyEventsForKey(
        KeyName.Q,
        'Send a greeting',
        false,
        false,
        true
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

}
