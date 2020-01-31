import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';
import { FilterOption } from 'projects/hal-components/src/lib/components/checkbox-filter/filter-option';

@Component({
  selector: 'hal-checkbox-filter-doc',
  templateUrl: './checkbox-filter-doc.component.html',
  styleUrls: ['./checkbox-filter-doc.component.scss']
})
export class CheckboxFilterDocComponent implements OnInit {

  filterInput: ApiTableRow[] = [
    { apiInput: 'light', description: 'Optional input to make the line ligth or not' },
  ];

  htmlCode = `<hal-checkbox-filter></hal-checkbox-filter>`;

  filterOptions: FilterOption[] = [
    {value: '1', viewValue: 'filter 1', checked: false},
    {value: '2', viewValue: 'filter 1'},
    {value: '3', viewValue: 'filter 1', checked: true}
  ];

  constructor() { }

  ngOnInit() {
  }

}
