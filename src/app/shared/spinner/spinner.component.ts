import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hal-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (CSS as any).registerProperty({
      name: '--ang',
      syntax: '<angle>',
      initialValue: '0deg',
      inherits: true
    });
    (CSS as any).registerProperty({
      name: '--ang-inner',
      syntax: '<angle>',
      initialValue: '0deg',
      inherits: true
    });
  }

}
