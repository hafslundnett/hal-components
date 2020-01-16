import { Component, OnInit, Input } from '@angular/core';
import { User } from './user-menu/user.interface';

// TODO rename header
@Component({
  selector: 'hal-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() user: User = { email: '', name: '', thumbnail: undefined};
  @Input() settingsPagePath: string;
  @Input() signOutPagePath: string;
  @Input() appListDomainUrl: string;

  constructor() {}

  ngOnInit() {
  }

}
