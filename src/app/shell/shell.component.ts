import { Component, OnInit } from '@angular/core';
import { MenuElement } from '@hafslundnett/hal-components';
import { User } from '@hafslundnett/hal-components';

@Component({
  selector: 'hal-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  menuItems: MenuElement[] = [
    { url: 'welcome', svgName: 'overview.svg', title: 'Front page', groupTitle: 'HAL' },
    { url: 'hdd', svgName: 'analysis.svg', title: 'HDD' },
  ];
  user: User = { email: 'jan.greger@gmail.com', name: 'Jan Greger Hemb', thumbnail: undefined};
  settingsPagePath = 'settings-page';
  signOutPagePath = 'log-out';

  constructor() { }

  ngOnInit() {
  }

}
