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
    { apiInput: 'TODO', description: 'TODO' },
  ];

  htmlCode = `<todo></todo>`;
  tsCode = `// TODO`;

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
    console.log('selected!', selectedItem);
  }

}
