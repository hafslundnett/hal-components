import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AutocompleteItem } from './autocomplete-item.interface';

@Component({
  selector: 'hal-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit, OnChanges {

  @Input() value: string;
  @Input() options: AutocompleteItem[];
  // @Input() inputElement: ; // TODO for focus and arrow keys
  // detect if input has focus. send ref or focus is true input?

  showAutocomplete = false;

  filteredOptions: AutocompleteItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // TODO fix with angular 9 and TS 3.7
    console.log(this.value);
    if (this.value && this.value.length > 0) {
      this.showAutocomplete = true;
    } else {
      this.showAutocomplete = false;
    }

    if (changes.value) {
      this.filteredOptions = this.getFilteredOptions(this.options, this.value);
      console.log(this.filteredOptions);
    }
  }

  getFilteredOptions(allOptions: AutocompleteItem[], currentValue: string): AutocompleteItem[] {
    return allOptions.filter(currentOption => {
      return currentOption.label.toLowerCase().includes(currentValue.toLowerCase());
    });
  }

}
