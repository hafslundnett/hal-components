import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { SelectData } from './select-data.interface';

@Component({
  selector: 'hal-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SelectorComponent implements OnInit {

  @Input() selectData: SelectData[];
  @Input() selected: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() disabled = false;
  @Output() selectedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelectedChange() {
    this.selectedChange.emit(this.selected);
  }

}
