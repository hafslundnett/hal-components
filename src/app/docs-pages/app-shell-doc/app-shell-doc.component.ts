import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-app-shell-doc',
  templateUrl: './app-shell-doc.component.html',
  styleUrls: ['./app-shell-doc.component.scss']
})
export class AppShellDocComponent implements OnInit {

  api: ApiTableRow[] = [
    // tslint:disable-next-line:max-line-length
    { apiInput: '[menuItems]', description: 'List of the menu elements with url, svg file name, title, iconTitle and potentially groupTitle' },
    { apiInput: '[user]', description: 'The current active user' },
    { apiInput: '[settingsPagePath]', description: 'URL to settings page in your application' },
    { apiInput: '[signOutPagePath]', description: 'URL to sign out page in your application. That page should auto sign out the user' },
    { apiInput: 'ngProjectAs="pageTitle"', description: 'The current page title' },
    { apiInput: 'ngProjectAs="pageContent"', description: 'The page content. Either a router-outlet or a component' },
  ];
  htmlCode = `<hal-app-shell
  [menuItems]="menuItems"
  [user]="user"
  [settingsPagePath]="settingsPagePath"
  [signOutPagePath]="signOutPagePath"
>
  <ng-container ngProjectAs="pageTitle">
    Hafslund Angular Components
  </ng-container>
  <ng-container ngProjectAs="pageContent">
    <router-outlet></router-outlet>
  </ng-container>
</hal-app-shell>`;

  tsCode = `menuItems: MenuElement[] = [
  { url: 'welcome', svgName: 'overview.svg', title: 'Home', groupTitle: 'HAL', iconTitle: 'HOME' },
  { url: 'hdd', svgName: 'analysis.svg', title: 'HDD', iconTitle: 'HDD' },
];
user: User = {
  email: 'jan.greger@gmail.com',
  name: 'Jan Greger Hemb',
  thumbnail: undefined
};
settingsPagePath = 'settings-page';
signOutPagePath = 'log-out';`;

  constructor() { }

  ngOnInit() {
  }

}
