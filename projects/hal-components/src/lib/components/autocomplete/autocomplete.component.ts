import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AutocompleteItem } from './autocomplete-item.interface';
import { fromEvent, Subscription } from 'rxjs';
import { autoCompleteAnimation } from '../../animations';

@Component({
  selector: 'hal-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  animations: [autoCompleteAnimation]
})
export class AutocompleteComponent implements OnInit, OnChanges, OnDestroy {

  @Input() inputText: AutocompleteItem['label'];
  @Input() options: AutocompleteItem[];
  @Input() inputElement: any;

  @Output() optionSelected = new EventEmitter<AutocompleteItem>();

  showAutocomplete = false;
  activeIndex = 0;
  hasFocus = false;

  filteredOptions: AutocompleteItem[] = [];

  subscriptions = new Subscription();

  constructor() { }

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
    this.subscriptions.add(
      fromEvent(this.inputElement, 'keydown').subscribe({
        next: (event: KeyboardEvent) => this.onKeyPress(event)
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.inputText) {
      if (this.hasFocus) {
        this.showAutocomplete = true;
      }
      this.inputTextChanged();
    }
  }

  optionClicked(option: AutocompleteItem) {
    this.optionSelected.emit(option);
    this.showAutocomplete = false;
  }

  private inputTextChanged() {
    this.filteredOptions = this.getFilteredOptions(this.options, this.inputText);
    this.activeIndex = 0;

    // dont show if only option and selected
    if (this.filteredOptions.length === 1 && this.filteredOptions[0].label === this.inputText) {
      this.showAutocomplete = false;
    }
    // don't show empty box
    if (this.filteredOptions.length === 0) {
      this.showAutocomplete = false;
    }
  }

  private onKeyPress(event: KeyboardEvent) {
    const keyName = event.key;
    if (keyName === 'ArrowUp') {
      this.keyUp();
    }
    if (keyName === 'ArrowDown') {
      this.keyDown();
    }
    if (keyName === 'Enter') {
      this.keySubmit();
    }
    if (keyName === 'Escape') {
      this.keyExit();
    }
  }

  private keyUp() {
    this.activeIndex--;
    if (this.activeIndex < 0) {
      this.activeIndex = this.filteredOptions.length - 1;
    }
    if (this.filteredOptions.length > 0) {
      this.showAutocomplete = true;
    }
  }

  private keyDown() {
    this.activeIndex++;
    if (this.activeIndex >= this.filteredOptions.length) {
      this.activeIndex = 0;
    }
    if (this.filteredOptions.length > 0) {
      this.showAutocomplete = true;
    }
  }

  private keySubmit() {
    if (this.activeIndex < 0 || this.activeIndex > this.filteredOptions.length) {
      return;
    }
    if (this.filteredOptions.length === 0) {
      return;
    }
    this.optionSelected.emit(this.filteredOptions[this.activeIndex]);
    this.showAutocomplete = false;
  }

  private keyExit() {
    this.showAutocomplete = false;
  }

  private onFocus() {
    if (this.filteredOptions.length > 0) {
      this.showAutocomplete = true;
    }
    this.hasFocus = true;
  }

  private onBlur() {
    setTimeout(() => {
      this.showAutocomplete = false;
    }, 150);
    this.hasFocus = false;
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
