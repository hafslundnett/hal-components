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
    {value: 'Alt3', viewValue: 'Alternative 3'},
    {value: 'Alt4', viewValue: 'Alternative 4'},
    {value: 'Alt5', viewValue: 'Alternative 5'},
    {value: 'Alt6', viewValue: 'Alternative 6'},
    {value: 'Alt7', viewValue: 'Alternative 7'},
  ];
  selectedEx1 = 'Alt1';
  selectedEx2 = undefined;
  selectedEx3 = undefined;
  choiceDisabled = 'Alt3';
  selectedChange: string;
  selectedLabel = 'Label for data';

  selectorTable: ApiTableRow[] = [
    { apiInput: '[selectData]', description: 'Input for the data displayed in the select dropdown.' },
    // tslint:disable-next-line:max-line-length
    { apiInput: '[(selected)]', description: 'Output and optional input for the selected value in the dropdown. If a selected value is given this will be selected by default.' },
    { apiInput: '[label]', description: 'Input for the description on top of the input field.' },
    // tslint:disable-next-line:max-line-length
    { apiInput: '[placeholder]', description: 'Optional input for extra description in the input field. If no placeholder is given the label will be default placeholder.' },
    { apiInput: '[disabled]', description: 'Optional input making the dropdown disabled.' },
    // { apiInput: '[required]', description: 'Optional input making it required to choose a value.' },
    { apiInput: '[noLabel]', description: 'Optional input making removing the label. Should only be used with consent from designer.' },
  ];

  htmlCode = `<div class="example-container">
  <hal-selector
    [selectData]="selectData"
    [(selected)]="selectedEx1"
    [label]="'Label for data'"
  ></hal-selector>
  <h2 *ngIf="selectedEx1">Selected data: <b>{{ selectedEx1 }}</b></h2>
</div>
<div class="example-container">
  <hal-selector
    [selectData]="selectData"
    [(selected)]="selectedEx2"
    [label]="'Label for data'"
    [placeholder]="'Placeholder'"
  ></hal-selector>
  <h2 *ngIf="selectedEx2">Selected data: <b>{{ selectedEx2 }}</b></h2>
</div>

<div class="example-info">
  <h2>Add more data to select:</h2>
  <button class="hdd-button" (click)="addSelectData()">Add data</button>
</div>`;

  tsCode = `selectData: SelectData[] = [
  {value: 'Alt1', viewValue: 'Alternative 1'},
  {value: 'Alt2', viewValue: 'Alternative 2'},
  {value: 'Alt3', viewValue: 'Alternative 3'},
  {value: 'Alt4', viewValue: 'Alternative 4'},
  {value: 'Alt5', viewValue: 'Alternative 5'},
  {value: 'Alt6', viewValue: 'Alternative 6'},
  {value: 'Alt7', viewValue: 'Alternative 7'},
];
dataNumber = 2;
selectedEx1 = 'Alt2';
selectedEx2 = undefined;
selectedChange: string;`;

  constructor() { }

  ngOnInit() { }

}
