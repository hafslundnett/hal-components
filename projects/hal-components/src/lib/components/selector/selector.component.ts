import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface PowerSource {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'hal-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SelectorComponent implements OnInit {

  energySources: PowerSource[] = [
    { value: 'Water', viewValue: 'Hydroelectricity' },
    { value: 'Wind', viewValue: 'Windmills' },
    { value: 'Solar', viewValue: 'Solar' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
