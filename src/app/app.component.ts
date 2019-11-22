import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { KeyboardShortcutsService } from '@hafslundnett/hal-components';
import { KeyName } from '@hafslundnett/hal-components';
interface Page {
  name: string;
  url: string;
}

@Component({
  selector: 'hal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ KeyboardShortcutsService ]
})
export class AppComponent implements OnInit {

  pages: Page[] = [
    { name: '01 HDD-style', url: 'hdd' },
    { name: '02 Shell', url: 'shell' },
    { name: '03 Buttons', url: 'buttons' },
    { name: '04 Inputs', url: 'inputs' },
    { name: '05 Komponenter', url: 'components' }
  ];

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
