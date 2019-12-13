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
    { url: 'welcome', svgName: 'overview.svg', title: 'Front page', groupTitle: 'HAL', iconTitle: 'home' },
    { url: 'getting-started', svgName: 'analysis.svg', title: 'Getting Started', iconTitle: 'Install' },
    { url: 'hdd', svgName: 'analysis.svg', title: 'HDD', iconTitle: 'hdd' },
  ];
  user: User = { email: 'jan.greger@gmail.com', name: 'Jan Greger Hemb', thumbnail: undefined};
  settingsPagePath = 'settings-page';
  signOutPagePath = 'log-out';

  constructor() { }

  ngOnInit() {
  }

}
