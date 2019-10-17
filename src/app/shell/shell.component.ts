import { Component, OnInit } from '@angular/core';
import { MenuElement } from 'hal-components/public-api';
import { User } from 'projects/hal-components/src/public-api';

@Component({
  selector: 'hal-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  menuItems: MenuElement[] = [
    { url: 'welcome', svgName: 'overview.svg', title: 'Front page', groupTitle: 'HAL' },
    { url: 'hdd', svgName: 'analysis.svg', title: 'HDD' },
    // { url: '', svgName: 'meterSearch.svg', title: 'Målepunktsøk' },
  ];
  user: User = { email: 'jan.greger@gmail.com', name: 'Jan Greger Hemb', thumbnail: null};
  settingsPagePath = 'settings-page'; // TODO add!

  constructor() { }

  ngOnInit() {
  }

}
