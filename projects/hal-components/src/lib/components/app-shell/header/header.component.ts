import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { User } from './user-menu/user.interface';

@Component({
  selector: 'hal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    class: 'hdd-header'
  }
})
export class HeaderComponent implements OnInit {

  @Input() user: User = { email: '', name: '', thumbnail: undefined};
  @Input() settingsPagePath: string;
  @Input() signOutPagePath: string;
  @Input() appListDomainUrl: string;

  constructor() {}

  ngOnInit() {
  }

}
