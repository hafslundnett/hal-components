import { Component, OnInit, Input } from '@angular/core';
import { MenuElement } from './sidenav/sidenav.menu-element.interface';
import { User } from './header/user-menu/user.interface';

@Component({
  selector: 'hal-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  @Input() user: User = { email: '', name: '', thumbnail: undefined};
  @Input() settingsPagePath = 'settings';
  @Input() signOutPagePath = 'logout';
  @Input() appListDomainUrl = 'hafslundnett.io';
  @Input() menuItems: MenuElement[];
  @Input() menuIconsFolder = 'sideMenu';

  constructor() { }

  ngOnInit() {
  }

}
