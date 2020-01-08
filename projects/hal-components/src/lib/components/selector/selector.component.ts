import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { SelectData } from './select-data.interface';
import { MatSelect } from '@angular/material';

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
  @Input() choiceDisabled: string;
  @Input() noLabel = false;
  @Input() isSmall = false;
  @Output() selectedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelectedChange() {
    this.selectedChange.emit(this.selected);
  }

  isChoiceDisabled(value: string) {
    return this.choiceDisabled === value;
  }

}
