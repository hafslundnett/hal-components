import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { User } from './user-menu/user.interface';

// TODO rename header
@Component({
  selector: 'hal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() user: User = { email: '', name: '', thumbnail: undefined};
  @Input() settingsPagePath: string;
  @Input() signOutPagePath: string;
  @Input() appListDomainUrl: string;

  // will set hdd-header on this angular component
  @HostBinding('class.hdd-header') hddHeader = true;

  constructor() {}

  ngOnInit() {
  }

}
