import { Component, OnInit } from '@angular/core';

interface App {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'hal-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  appList: App[] = [
    {
      name: 'Orbit',
      icon: 'fa-fighter-jet',
      url: 'https://orbit.test-hafslundnett.io'
    },
    {
      name: 'Drops',
      icon: 'fa-plane',
      url: 'https://mdm.test-hafslundnett.io/dashboard?status=0'
    },
    {
      name: 'Mdm',
      icon: 'fa-plane',
      url: 'https://mdm.test-hafslundnett.io/dashboard?status=0'
    },
    {
      name: 'ADLS',
      icon: 'fa-plane',
      url: 'https://adls.test-hafslundnett.io/'
    },
    {
      name: 'Jordfeil',
      icon: 'fa-plane',
      url: 'https://adls.test-hafslundnett.io/'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  cancelMouseEventBubble(e: MouseEvent) {
    e.cancelBubble = true;
  }


}
