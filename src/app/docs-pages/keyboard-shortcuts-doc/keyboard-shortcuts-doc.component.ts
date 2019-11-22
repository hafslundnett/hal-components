import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { KeyboardShortcutsService } from '@hafslundnett/hal-components';
import { KeyName } from '@hafslundnett/hal-components';

@Component({
  selector: 'hal-keyboard-shortcuts-doc',
  templateUrl: './keyboard-shortcuts-doc.component.html',
  styleUrls: ['./keyboard-shortcuts-doc.component.scss']
})
export class KeyboardShortcutsDocComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();

  constructor(private keyboardShortcutsService: KeyboardShortcutsService) { }

  ngOnInit() {
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
