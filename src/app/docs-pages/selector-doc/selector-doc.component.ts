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
  selectSmallData: SelectData[] = [
    {value: '10', viewValue: '10'},
    {value: '25', viewValue: '25'},
    {value: 'alle', viewValue: 'Alle'},
  ];
  selectedEx1 = 'Alt1';
  selectedEx2 = undefined;
  selectedEx3 = undefined;
  selectedEx4 = '10';
  choiceDisabled = 'Alt3';
  selectedChange: string;
  selectedLabelEx1 = 'Label for data';
  selectedLabelEx2 = 'Label for data';
  selectedLabelEx3 = 'Label (no placeholder)';
  placeholder = 'Placeholder';

  selectorTable: ApiTableRow[] = [
    { apiInput: '[selectData]', description: 'For the data displayed in the select dropdown.' },
    // tslint:disable-next-line:max-line-length
    { apiInput: '[(selected)]', description: 'For the selected value in the dropdown. If a selected value is given this will be selected by default.' },
    { apiInput: '(selectedChange)', description: 'Detects changes with the selected value.' },
    { apiInput: '[label]', description: 'For the description on top of the input field.' },
    // tslint:disable-next-line:max-line-length
    { apiInput: '[placeholder]', description: 'Optional input for extra description in the input field. If no placeholder is given the label will be default placeholder.' },
    { apiInput: '[disabled]', description: 'Optional boolean making the dropdown disabled.' },
    { apiInput: '[choiceDisabled]', description: 'Optional input making a specific option disabled.' },
    { apiInput: '[noLabel]', description: 'Optional boolean removing the label. Should only be used in specific cases.' },
    { apiInput: '[isSmall]', description: 'Optional boolean making the dropdown small. Should only be used in specific cases.' },
  ];

  htmlCode = `<div class="example">
  <hal-selector
    [selectData]="selectData"
    [(selected)]="selectedEx1"
    [label]="selectedLabelEx1"
    [choiceDisabled]="choiceDisabled"
  ></hal-selector>
</div>
<h2 *ngIf="selectedEx1">Selected data: <b>{{ selectedEx1 }}</b></h2>
<div class="example">
  <hal-selector
    [selectData]="selectData"
    [(selected)]="selectedEx2"
    (selectedChange)="someMethod($event)"
    [label]="selectedLabelEx2"
    [placeholder]="'Placeholder'"
  ></hal-selector>
</div>
<h2 *ngIf="selectedEx2">Selected data: <b>{{ selectedEx2 }}</b></h2>
<div class="example">
  <hal-selector
    [selectData]="selectData"
    [(selected)]="selectedEx3"
    [label]="selectedLabelEx3"
    [disabled]="true"
  ></hal-selector>
</div>
<div class="small-example">
  <hal-selector
    [selectData]="selectSmallData"
    [(selected)]="selectedEx4"
    [isSmall]="true"
    [noLabel]="true"
  ></hal-selector>
</div>
<h2 *ngIf="selectedEx4">Selected data: <b>{{ selectedEx4 }}</b></h2>
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
selectSmallData: SelectData[] = [
  {value: '10', viewValue: '10'},
  {value: '25', viewValue: '25'},
  {value: 'alle', viewValue: 'Alle'},
];

selectedEx1 = 'Alt1';
selectedEx2 = undefined;
selectedEx3 = undefined;
selectedEx4 = '10';
choiceDisabled = 'Alt3';
selectedChange: string;
selectedLabelEx1 = 'Label for data';
selectedLabelEx2 = 'Label for data';
selectedLabelEx3 = 'Label (no placeholder)';
placeholder = 'Placeholder';`;

  constructor() { }

  ngOnInit() { }

  someMethod(selected: string) {
    console.log('Some method was called: ' + selected);
  }

}
