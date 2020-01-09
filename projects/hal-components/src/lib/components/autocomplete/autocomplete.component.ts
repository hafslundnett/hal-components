import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectorRef, NgZone, OnDestroy } from '@angular/core';
import { AutocompleteItem } from './autocomplete-item.interface';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'hal-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit, OnChanges, OnDestroy {

  @Input() value: string;
  @Input() options: AutocompleteItem[];
  @Input() inputElement: any; // TODO for focus and arrow keys
  // detect if input has focus. send ref or focus is true input?

  @Output() optionSelected = new EventEmitter<AutocompleteItem>();

  showAutocomplete = false;

  filteredOptions: AutocompleteItem[] = [];

  subscriptions = new Subscription();

  constructor(
    public zone: NgZone
  ) { }

  ngOnInit() {

    this.subscriptions.add(
      fromEvent(this.inputElement, 'focus').subscribe({
        next: () => this.onFocus()
      })
    );
    this.subscriptions.add(
      fromEvent(this.inputElement, 'blur').subscribe({
        next: () => this.onBlur()
      })
    );

    // TODO key up and down
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    // TODO fix with angular 9 and TS 3.7
    if (this.value && this.value.length > 0) {
      this.showAutocomplete = true;
    } else {
      this.showAutocomplete = false;
    }

    if (changes.value) {
      this.filteredOptions = this.getFilteredOptions(this.options, this.value);
    }
  }

  optionClicked(option: AutocompleteItem) {
    this.optionSelected.emit(option);
  }

  private onFocus() {
    this.showAutocomplete = true;
  }

  private onBlur() {
    if (!this.value || this.value.length === 0) {
      // give time for click event to fire
      setTimeout(() => {
        this.showAutocomplete = false;
      }, 100);
      this.showAutocomplete = true;
    }
  }

  private getFilteredOptions(allOptions: AutocompleteItem[], currentValue: string): AutocompleteItem[] {
    return allOptions.filter(currentOption => {
      if (!currentValue || currentValue.length === 0) {
        return true;
      }
      return currentOption.label.toLowerCase().includes(currentValue.toLowerCase());
    });
  }

}
