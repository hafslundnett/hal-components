import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-selector-doc',
  templateUrl: './selector-doc.component.html',
  styleUrls: ['./selector-doc.component.scss']
})
export class SelectorDocComponent implements OnInit {

  selectorTable: ApiTableRow[] = [
    { apiInput: 'TODO', description: 'More TODO' },
  ];

  htmlCode = `HAL SELECTOR TODO`;

  constructor() { }

  ngOnInit() {
  }

}
