import { Component, OnInit, Input } from '@angular/core';
import { MenuElement } from './sidenav/sidenav.menu-element.interface';
import { User } from './toolbar/user-menu/user.interface';

@Component({
  selector: 'hal-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  @Input() user: User = { email: null, name: null, thumbnail: null};
  @Input() settingsPagePath = 'settings';
  @Input() signOutPagePath = 'logout';
  @Input() menuItems: MenuElement[];

  constructor() { }

  ngOnInit() {
  }

}
