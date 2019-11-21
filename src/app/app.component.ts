import { Component, OnInit } from '@angular/core';
interface Page {
  name: string;
  url: string;
}

@Component({
  selector: 'hal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pages: Page[] = [
    { name: '01 HDD-style', url: 'hdd' },
    { name: '02 Shell', url: 'shell' },
    { name: '03 Buttons', url: 'buttons' },
    { name: '04 Inputs', url: 'inputs' },
    { name: '05 Komponenter', url: 'components' }
  ];
}
