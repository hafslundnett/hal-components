import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hal-extend',
  templateUrl: './extend.component.html',
  styleUrls: ['./extend.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ExtendComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
