import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hal-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  isSHELL = `ng add @hafslundnett/hal-components`;
  isNPM = `npm install @hafslundnett/hal-components`;
  isYARN = `yarn add @hafslundnett/hal-components`;

  constructor() { }

  ngOnInit() {
  }

}
