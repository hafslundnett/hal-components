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

  ngOnInit() {
  }
}
