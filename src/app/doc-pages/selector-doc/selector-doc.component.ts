import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';
import { SelectOption } from '@hafslundnett/hal-components';

@Component({
  selector: 'hal-selector-doc',
  templateUrl: './selector-doc.component.html',
  styleUrls: ['./selector-doc.component.scss']
})
export class SelectorDocComponent implements OnInit {

  selectOptions: SelectOption[] = [
    {value: 'Alt1', viewValue: 'Alternative 1'},
    {value: 'Alt2', viewValue: 'Alternative 2'},
    {value: 'Alt3', viewValue: 'Alternative 3', disabled: true},
    {value: 'Alt4', viewValue: 'Alternative 4', disabled: true},
    {value: 'Alt5', viewValue: 'Alternative 5'},
    {value: 'Alt6', viewValue: 'Alternative 6'},
    {value: 'Alt7', viewValue: 'Alternative 7'},
  ];
  selectSmallOptions: SelectOption[] = [
    {value: '10', viewValue: '10'},
    {value: '25', viewValue: '25'},
    {value: 'alle', viewValue: 'Alle'},
  ];
  selectedEx1 = 'Alt1';
  selectedEx2 = [];
  selectedEx3 = ''; // undefined?
  selectedEx4 = '10';
  choiceDisabled = 'Alt3';
  selectedChange: string;
  selectedLabelEx1 = 'Label for data';
  selectedLabelEx2 = 'Label for data';
  selectedLabelEx3 = 'Label (no placeholder)';
  placeholder = 'Placeholder';

  selectorTable: ApiTableRow[] = [
    { apiInput: '[selectOptions]', description: 'For the data displayed in the select dropdown.' },
    // tslint:disable-next-line:max-line-length
    { apiInput: '[(selected)]', description: 'For the selected value in the dropdown. If a selected value is given this will be selected by default. The selected value will be an array if multipleChoices is set to true.' },
    { apiInput: '(selectedChange)', description: 'Detects changes with the selected value.' },
    { apiInput: '[label]', description: 'For the description on top of the input field.' },
    // tslint:disable-next-line:max-line-length
    { apiInput: '[placeholder]', description: 'Optional input for extra description in the input field. If no placeholder is given the label will be default placeholder.' },
    { apiInput: '[disabled]', description: 'Optional boolean making the dropdown disabled.' },
    { apiInput: '[choiceDisabled]', description: 'Optional input making a specific option disabled.' },
    { apiInput: '[noLabel]', description: 'Optional boolean removing the label. Should only be used in specific cases.' },
    { apiInput: '[isSmall]', description: 'Optional boolean making the dropdown small. Should only be used in specific cases.' },
    { apiInput: '[multipleChoices]', description: 'Optional boolean making it possible to choose more than 1 option. Selected is then an array of strings.' },
    { apiInput: '[allowSelectAllOption]', description: 'Optional boolean making it possible to choose all the options at once, when multipleChoices is true. Selected is then an array of strings.' },
  ];

  htmlCode = `<div class="example">
  <hal-selector
    [selectOptions]="selectOptions"
    [(selected)]="selectedEx1"
    [label]="selectedLabelEx1"
    [choiceDisabled]="choiceDisabled"
  ></hal-selector>
</div>
<h2 *ngIf="selectedEx1">Selected data: <b>{{ selectedEx1 }}</b></h2>
<div class="example">
  <hal-selector
    [selectOptions]="selectOptions"
    [(selected)]="selectedEx2"
    [label]="selectedLabelEx2"
    [placeholder]="'Placeholder'"
    [multipleChoices]="true"
    [allowSelectAllOption]="true"
  ></hal-selector>
</div>
<h2 *ngIf="*ngIf="selectedEx2.length>0">
  Selected data:
  <b *ngFor="let selected of selectedEx2">{{ selected }}, </b>
</h2>
<div class="example">
  <hal-selector
    [selectOptions]="selectOptions"
    [(selected)]="selectedEx3"
    [label]="selectedLabelEx3"
    [disabled]="true"
  ></hal-selector>
</div>
<div class="small-example">
  <hal-selector
    [selectOptions]="selectSmallOptions"
    [(selected)]="selectedEx4"
    [isSmall]="true"
    [noLabel]="true"
  ></hal-selector>
</div>
<h2 *ngIf="selectedEx4">Selected data: <b>{{ selectedEx4 }}</b></h2>
</div>`;

  tsCode = `selectOptions: selectOption[] = [
  {value: 'Alt1', viewValue: 'Alternative 1'},
  {value: 'Alt2', viewValue: 'Alternative 2'},
  {value: 'Alt3', viewValue: 'Alternative 3'},
  {value: 'Alt4', viewValue: 'Alternative 4'},
  {value: 'Alt5', viewValue: 'Alternative 5'},
  {value: 'Alt6', viewValue: 'Alternative 6'},
  {value: 'Alt7', viewValue: 'Alternative 7'},
];
selectSmallOption: selectOption[] = [
  {value: '10', viewValue: '10'},
  {value: '25', viewValue: '25'},
  {value: 'alle', viewValue: 'Alle'},
];

selectedEx1 = 'Alt1';
selectedEx2 = [];
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

}
