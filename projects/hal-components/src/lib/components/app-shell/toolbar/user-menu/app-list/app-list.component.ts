import { Component, OnInit, Input } from '@angular/core';

interface App {
  name: string;
  icon: string;
  url: string;
  subdomain: string;
}

@Component({
  selector: 'hal-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  @Input() appListDomainUrl: string;

  appList: App[] = [
    {
      name: 'Orbit',
      icon: 'fa-fighter-jet',
      url: '',
      subdomain: 'orbit'
    },
    {
      name: 'Drops',
      icon: 'fa-plane',
      url: '',
      subdomain: 'mdm'
    },
    {
      name: 'ADLS',
      icon: 'fa-plane',
      url: '',
      subdomain: 'adls'
    },
    {
      name: 'Smartvann',
      icon: 'fa-plane',
      url: '',
      subdomain: 'smartvann'
    },
    {
      name: 'Jordfeil',
      icon: 'fa-plane',
      url: '',
      subdomain: 'jordfeil'
    },
  ];

  constructor() { }

  ngOnInit() {
    this.appList = this.appList.map((currentApp: App) => {
      return {
        ...currentApp,
        url: 'https://' + currentApp.subdomain + '.' + this.appListDomainUrl + '/'
      };
    });
  }

  cancelMouseEventBubble(e: MouseEvent) {
    e.cancelBubble = true;
  }

}
