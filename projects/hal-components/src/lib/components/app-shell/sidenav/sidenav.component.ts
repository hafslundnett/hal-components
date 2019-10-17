import { Component, OnInit, Input } from '@angular/core';
import { MenuElement } from './sidenav.menu-element.interface';

@Component({
  selector: 'hal-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() menuItems: MenuElement[];

  isOpen = false;

  iconWidth = '32px';
  iconHeight = '26px';

  // menuItems: MenuElementNew[] = [
  //   { url: Pages.dashboard, svgName: 'overview.svg', title: 'Saksliste', groupTitle: 'Drops' },
  //   { url: Pages.meteringpointSearch, svgName: 'meterSearch.svg', title: 'Målepunktsøk' },
  //   { url: Pages.analysis, svgName: 'analysis.svg', title: 'Kart og analyse', divider: true }
  // ];

  ngOnInit() {
  }
}
