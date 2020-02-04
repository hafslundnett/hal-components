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

  ansattOptions: FilterOption[] = [
    {value: '1', viewValue: 'A53416@hafslund.no',  quantity: 10},
    {value: '2', viewValue: 'A43416@hafslund.no', quantity: 13},
    {value: '3', viewValue: 'A23416@hafslund.no', quantity: 8, checked: true},
    {value: '4', viewValue: 'A63416@hafslund.no', quantity: 29},
    {value: '6', viewValue: 'A53416@hafslund.no',  quantity: 16},
    {value: '7', viewValue: 'A43416@hafslund.no', quantity: 13},
    {value: '8', viewValue: 'A23416@hafslund.no', quantity: 8, checked: true},
    {value: '9', viewValue: 'A63416@hafslund.no', quantity: 29},
    {value: '10', viewValue: 'A73416@hafslund.no', quantity: 20},
  ];

  ansattTitle = 'Ansattnummer';

  constructor() { }

  ngOnInit() {
  }

}
