import { DemoData } from './demo-data-table.interface';
import { TableEngine, DetailsTabColumn } from '@hafslundnett/hal-components';

export class DemoTableConfig extends TableEngine<DemoData> {

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
}
