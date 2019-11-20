import { DemoData } from './demo-data-table.interface';
import { TableEngine, DetailsTabColumn } from '@hafslundnett/hal-components';

export class DemoTableConfig extends TableEngine<DemoData> {
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
}
