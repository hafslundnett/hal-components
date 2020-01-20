import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { SelectData } from './select-data.interface';

@Component({
  selector: 'hal-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SelectorComponent implements OnInit {
  @Input() multipleChoices = false;
  @Input() selectData: SelectData[];
  @Input() selected: string[] | string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() disabled = false;
  @Input() choiceDisabled: string;
  @Input() noLabel = false;
  @Input() isSmall = false;
  @Input() selectAll = false;
  @Output() selectedChange = new EventEmitter();

  public allSelected = false;

  constructor() { }

  ngOnInit() {
  }

  onSelectedChange() {
    if (!this.allSelected && this.selected.includes('Alle')) {
      this.selectAllValues();
    } else if (this.allSelected && !this.selected.includes('Alle')) {
      this.removeAllValues();
    }
    this.selectedChange.emit(this.selected);
  }

  isChoiceDisabled(value: string | string[]) {
    return this.choiceDisabled === value;
  }

  selectAllValues(): void {
    const fullArray: string[] = [];
    this.selectData.forEach(data => {
      fullArray.push(data.value);
    });
    fullArray.push('Alle');
    this.selected = fullArray;
    this.allSelected = true;
  }

  removeAllValues(): void {
    this.selected = [];
    this.allSelected = false;
  }

}
