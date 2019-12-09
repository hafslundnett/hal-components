import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';
import { SelectData } from '@hafslundnett/hal-components';

@Component({
  selector: 'hal-selector-doc',
  templateUrl: './selector-doc.component.html',
  styleUrls: ['./selector-doc.component.scss']
})
export class SelectorDocComponent implements OnInit {

  selectData: SelectData[] = [
    {value: 'Alt1', viewValue: 'Alternative 1'},
    {value: 'Alt2', viewValue: 'Alternative 2'},
  ];
  dataNumber = 2;
  selected = 'Alt2';
  selectedChange: string;

  selectorTable: ApiTableRow[] = [
    { apiInput: 'TODO', description: 'More TODO' },
  ];

  htmlCode = `HAL SELECTOR TODO`;

  constructor() { }

  ngOnInit() { }

  addSelectData() {
    this.dataNumber += 1;
    const dataNumberString = (this.dataNumber).toLocaleString();
    const newData = {value: ('Alt' + dataNumberString), viewValue: 'Alternative ' + dataNumberString};
    this.selectData.push(newData);
  }

}
