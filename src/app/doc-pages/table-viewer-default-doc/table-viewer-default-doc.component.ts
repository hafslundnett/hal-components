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

  schemaConfig = 'ng generate @hafslundnett/hal-components:table-config';

  tsCodeTableConfig = `export class DemoTableConfig extends TableEngine<DemoData> {
  static columnConfiguration: DetailsTabColumn<DemoData>[] = [
    {
      columnName: 'name',
      headerName: 'Name of person',
      sortable: false,
      displayDataFunc: (data: DemoData) => data.name,
    },
    {
      columnName: 'age',
      headerName: 'Age',
      displayDataFunc: (data: DemoData) => data.age,
    },
    {
      columnName: 'role',
      headerName: 'Role',
      displayDataFunc: (data: DemoData) => data.role,
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
filteredTableConfig: TableEngine<DemoData> = this.tableConfig;

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

addRow() {
  // just pushing will not allow angular to detect the change. Need a new array
  this.tableData = [
    ...this.tableData,
    {
      age: 12,
      name: 'Stoffer',
      role: 'Asker'
    }
  ];
}
  `;
  htmlCode = `<hal-table-viewer-default
  [tableData]="tableData"
  [tableConfig]="tableConfig"
  [tableConfigStatic]="tableConfigStatic"
  [sliceSize]="sliceSize"
  [filteredTableConfig]="filteredTableConfig"
  [paginationOptions]="[5, 10, 20]"
></hal-table-viewer-default>`;

  apiTableRowsDefaultViewer: ApiTableRow[] = [
    { apiInput: '[filteredTableConfig]', description: 'The subset of element to show, and in witch order' },
    { apiInput: '[tableData]', description: 'The data to display in the table' },
    { apiInput: '[sliceSize]', description: 'TODO' },
    { apiInput: '[tableConfig]', description: 'The config for the table' },
    { apiInput: '[tableConfigStatic]', description: 'The static version of the config for the table' },
    { apiInput: '[stickyHeader]', description: 'If header should be sticky' },
    { apiInput: '[paginationOptions]', description: 'Setting this will enable pagination. Set the pagination size options (elements pr page) with an array. The page-size option to see everything in the table will be added by automatically.' },
  ];

  detailsTabColumnProps: ApiTableRow[] = [
    { apiInput: 'columnName', description: 'Name of column for angular without spaces (use camelCase)' },
    { apiInput: 'headerName', description: 'Name of column for the user ' },
    { apiInput: 'headerFullName', description: 'Name of column for the user with extra info' },
    { apiInput: 'extraCssClasses', description: 'CSS class to be added to column' },
    { apiInput: 'displayDataFunc', description: 'A function that returns the data you want to display' },
    { apiInput: 'dateFormat?', description: 'The format of the date. Only displays as date if provided' },
    { apiInput: 'sortable?', description: 'If column should have sorting. Default is true' },
    { apiInput: 'dynamicCssClasses?', description: 'A function returning a css class. Use extraCssClasses if just static class' },
  ];

  tableData: DemoData[] = TableDemoData;
  tableConfig = new DemoTableConfig();
  tableConfigStatic = DemoTableConfig;
  sliceSize = 10000;
  filteredTableConfig: TableEngine<DemoData> = this.tableConfig;

  constructor() { }

  ngOnInit() {
  }

  addRow() {
    // just pushing will not allow angular to detect the change. Need a new array
    this.tableData = [
      ...this.tableData,
      {
        age: 12,
        name: 'Stoffer',
        role: 'Asker'
      }
    ];
  }

  setOnlyName() {
    const newFilteredConfig = new DemoTableConfig();
    const newColumns: DetailsTabColumn<DemoData>[] = newFilteredConfig.tableColumns
      .filter(current => current.columnName === 'name');
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
