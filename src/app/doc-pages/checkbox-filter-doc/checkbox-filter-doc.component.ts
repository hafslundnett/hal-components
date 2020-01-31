import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

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

  constructor() { }

  ngOnInit() {
  }

}
