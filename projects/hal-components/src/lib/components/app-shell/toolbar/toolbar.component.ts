import { Component, OnInit, Input } from '@angular/core';
import { User } from './user-menu/user.interface';

@Component({
  selector: 'hal-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() user: User = { email: null, name: null, thumbnail: null};
  @Input() settingsPagePath = 'settings';
  @Input() signOutPagePath = 'logout';

  constructor() {}

  ngOnInit() {
  }

}