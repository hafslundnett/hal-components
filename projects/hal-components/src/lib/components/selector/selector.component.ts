import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { SelectOption } from './select-option.interface';

@Component({
  selector: 'hal-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SelectorComponent implements OnInit {
  @Input() multipleChoices = false;
  @Input() selectOptions: SelectOption[];
  @Input() selected: string[] | string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() disabled = false;
  @Input() noLabel = false;
  @Input() isSmall = false;
  @Input() allowSelectAllOption = false;
  @Output() selectedChange = new EventEmitter();

  public allSelected = false;

  readonly allValue = 'alle';

  constructor() { }

  ngOnInit() {
    if (this.allowSelectAllOption && !this.multipleChoices) {
      console.warn('allowSelectAllOption should only be true if multipleChoices is true.');
      return;
    }
  }

  onSelectedChange() {
    if (this.allowSelectAllOption && this.multipleChoices) {
      if (!this.allSelected &&
          (this.selected.includes(this.allValue) ||
          this.selected.length === (this.selectOptions.length - this.numberOfDisabledOptions()))
      ) {
        this.selectAllOptions();
      } else if (this.allSelected && !this.selected.includes(this.allValue)) {
        this.deselectAllOptions();
      } else if (this.allSelected && this.selected.length - 1 < (this.selectOptions.length - this.numberOfDisabledOptions())) {
        this.deselectAllOption();
      }
    }
    this.selectedChange.emit(this.selected);
  }

  selectAllOptions(): void {
    if (!Array.isArray(this.selected)) {
      console.warn('Cant select all options when multiple is false.');
      return;
    }

    this.selected = this.selectOptions
      .filter(data => !data.disabled)
      .map(data => data.value);
    this.selected.push(this.allValue);
    this.allSelected = true;
  }

  deselectAllOptions(): void {
    this.selected = [];
    this.allSelected = false;
  }

  deselectAllOption(): void {
    if (Array.isArray(this.selected)) {
      this.selected = this.selected.filter(option => option !== this.allValue);
      this.allSelected = false;
    }
  }

  numberOfDisabledOptions(): number {
    return this.selectOptions.filter(option => option.disabled === true).length;
  }

}
