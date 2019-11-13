import { Component, OnInit } from '@angular/core';
import { TableEngine, DetailsTabColumn } from '@hafslundnett/hal-components';
import { TableDemoData } from './config-and-data/demo-data-table.mock';
import { DemoData } from './config-and-data/demo-data-table.interface';
import { DemoTableConfig } from './config-and-data/demo-table-config';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-table-viewer-default-doc',
  templateUrl: './table-viewer-default-doc.component.html',
  styleUrls: ['./table-viewer-default-doc.component.scss']
})
export class TableViewerDefaultDocComponent implements OnInit {

  tsCodeTableConfig = `export class DemoTableConfig extends TableEngine<DemoData> {

  static columnConfiguration: DetailsTabColumn<DemoData>[] = [

    {
      columnName: 'names',
      headerName: 'Names',
      headerFullName: 'Name of person',
      extraCssClasses: '',
      displayDataFunc: (data: DemoData) => data.name,
    },
    {
      columnName: 'age',
      headerName: 'Age',
      headerFullName: 'Age of person',
      extraCssClasses: '',
      displayDataFunc: (data: DemoData) => data.age,
    },
    {
      columnName: 'role',
      headerName: 'Role',
      headerFullName: 'Role of person',
      extraCssClasses: '',
      displayDataFunc: (data: DemoData) => data.age,
    },

  ];

  constructor() {
    super();

    DemoTableConfig.columnConfiguration
      .forEach(column => this.addTabColumn(column));
  }
}`;
  tsCodeTable = `tableData: DemoData[] = TableDemoData;
tableConfig = new DemoTableConfig();
tableConfigStatic = DemoTableConfig;
sliceSize = 10000;
filteredTableConfig: TableEngine<DemoData>;

setOnlyName() {
  const newFilteredConfig = new DemoTableConfig();
  const newColumns: DetailsTabColumn<any>[] = newFilteredConfig.tableColumns
    .filter(current => current.columnName === 'names');
  newFilteredConfig.tableColumns = [...newColumns];
  this.filteredTableConfig = newFilteredConfig;
}

setAll() {
  this.filteredTableConfig = this.tableConfig;
}
  `;
  htmlCode = `<hal-table-viewer-default
  [tableData]="tableData"
  [tableConfig]="tableConfig"
  [tableConfigStatic]="tableConfigStatic"
  [sliceSize]="sliceSize"
  [filteredTableConfig]="filteredTableConfig"
></hal-table-viewer-default>`;

  apiTableRowsDefaultViewer: ApiTableRow[] = [
    { apiInput: '[filteredTableConfig]', description: 'The subset of element to show, and in witch order' },
    { apiInput: '[tableData]', description: 'The data to display in the table' },
    { apiInput: '[sliceSize]', description: 'TODO' },
    { apiInput: '[tableConfig]', description: 'The config for the table' },
    { apiInput: '[tableConfigStatic]', description: 'The static version of the config for the table' },
  ];

  tableData: DemoData[] = TableDemoData;
  tableConfig = new DemoTableConfig();
  tableConfigStatic = DemoTableConfig;
  sliceSize = 10000;
  filteredTableConfig: TableEngine<DemoData>; // AnalysisTableData

  constructor() { }

  ngOnInit() {
    this.filteredTableConfig = this.tableConfig;
  }

  setOnlyName() {
    const newFilteredConfig = new DemoTableConfig();
    const newColumns: DetailsTabColumn<DemoData>[] = newFilteredConfig.tableColumns
      .filter(current => current.columnName === 'names');
    newFilteredConfig.tableColumns = [...newColumns];
    this.filteredTableConfig = newFilteredConfig;
  }

  setRandomOrder() {
    const newFilteredConfig = new DemoTableConfig();
    const newColumns: DetailsTabColumn<DemoData>[] = this.shuffle(newFilteredConfig.tableColumns);
    newFilteredConfig.tableColumns = [...newColumns];
    this.filteredTableConfig = newFilteredConfig;
  }

  setAll() {
    this.filteredTableConfig = this.tableConfig;
  }

  // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffle(a) {
    let j;
    let x;
    let i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

}
