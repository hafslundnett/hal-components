import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';
import { AutocompleteItem } from '@hafslundnett/hal-components';

@Component({
  selector: 'hal-autocomplete-doc',
  templateUrl: './autocomplete-doc.component.html',
  styleUrls: ['./autocomplete-doc.component.scss']
})
export class AutocompleteDocComponent implements OnInit {

  apiTableData: ApiTableRow[] = [
    { apiInput: 'inputText', description: 'The value from your input field' },
    { apiInput: 'options', description: 'All options for the autocomplete. Will filter based on label' },
    { apiInput: 'inputElement', description: 'The HTML input element. This allows the autocomplete to handle focus and keyboard' },
    { apiInput: 'optionSelected', description: 'Will send out and event with the selected AutocompleteItem. Its your job to update inputText with that new value' },
  ];

  htmlCode = `
 <div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Please enter name </label>
  <div class="hdd-form_input hdd-dropdown">
    <input [(ngModel)]="name" placeholder="Please write name" #inputElement>

    <hal-autocomplete
      [inputText]="name"
      [options]="options"
      [inputElement]="inputElement"
      (optionSelected)="optionSelected($event)"
    ></hal-autocomplete>
  </div>
</div>`;
  tsCode = `name  = '';

optionSelected(selectedItem: AutocompleteItem) {
  this.name = selectedItem.label;
}

options: AutocompleteItem[] = [
  {
    label: 'Greger',
    value: 1,
  },
  {
    label: 'Jan Greger',
    value: 2,
  },
  {
    label: 'Fride',
    value: 3,
  },
  {
    label: 'Martin',
    value: 4,
  },
  {
    label: 'Anna',
    value: 5,
  }
];`;

  name  = '';

  options: AutocompleteItem[] = [
    {
      label: 'Greger',
      value: 1,
    },
    {
      label: 'Jan Greger',
      value: 2,
    },
    {
      label: 'Fride',
      value: 3,
    },
    {
      label: 'Martin',
      value: 4,
    },
    {
      label: 'Anna',
      value: 5,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  optionSelected(selectedItem: AutocompleteItem) {
    this.name = selectedItem.label;
  }

}
