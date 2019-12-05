import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'hal-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SelectorComponent implements OnInit {

  @Input() selectData: string[];
  @Input() label: string;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit() {
  }

}
