type DisplayDataFunc<ConfigDataType> = (data: ConfigDataType) => string | Date | Array<any> | boolean | number;

// TODO own file
export interface SortableSetting {
  columnName: string;
  sortable: boolean;
}

// TODO own file
export interface DetailsTabColumn<ConfigDataType> {
  columnName: string;
  headerName: string;
  headerFullName: string;
  extraCssClasses: string;
  displayDataFunc: DisplayDataFunc<ConfigDataType>;
  dateFormat?: string | null;
  sortable?: boolean;
  specialDisplayType?: any; // TODO
  dynamicCssClasses?: DisplayDataFunc<ConfigDataType> | undefined;
}

export abstract class TableEngine<ConfigDataType> {

  // public static columnConfiguration: DetailsTabColumn<any>[]; // TODO fix

  public tableColumns: DetailsTabColumn<ConfigDataType>[] = [];

  public name: string; // TODO consider enum?
  public label: string;
  public extraTableCss: string;

  /** null and undefined needs to be a empty string. Consider finding better name */
  public static strPrep(string): string {
    return string || '';
  }

  // credit to https://stackoverflow.com/a/7343013/1452165
  /** Set limitDecimalsTo to 0 or highter to limit */
  public static toLimitedDecimals(value: number, precision: number): number | null {
    if (isNaN(value)) {
      return null;
    }
    const multiplier = Math.pow(10, precision || 0);
    return (Math.round(value * multiplier) / multiplier);
  }

  /** value shold be between 0 and 1 */
  public static getPercentLimitedToDecimal(value: number, precision: number) {
    if (!value && value !== 0) {
      return null;
    }
    return (this.toLimitedDecimals(value * 100, precision)) + '%';
  }

  protected addColumn(
    columnName: string,
    headerName: string,
    headerFullName: string,
    extraCssClasses: string,
    displayDataFunc: DisplayDataFunc<ConfigDataType>,
    dateFormat?: string | null,
    sortable: boolean = true, // defaults to true
    specialDisplayType: any = null, // TODO
    dynamicCssClasses?: DisplayDataFunc<ConfigDataType>,
  ): void {
    this.tableColumns.push({
      columnName,
      headerName,
      headerFullName,
      extraCssClasses,
      displayDataFunc,
      dateFormat,
      sortable,
      specialDisplayType,
      dynamicCssClasses
    });
  }

  protected addTabColumn(column: DetailsTabColumn<ConfigDataType>): void {
    this.tableColumns.push({
      columnName: column.columnName,
      headerName: column.headerName,
      headerFullName: column.headerFullName,
      extraCssClasses: column.extraCssClasses,
      displayDataFunc: column.displayDataFunc,
      dateFormat: column.dateFormat ? column.dateFormat : null,
      sortable: column.sortable === null || column.sortable === undefined ? true : column.sortable,
      specialDisplayType: column.specialDisplayType ? column.specialDisplayType : null,
      dynamicCssClasses: column.dynamicCssClasses ? column.dynamicCssClasses : undefined
    });
  }

  public getAllColumnNames() {
    const columns: string[] = [];
    this.tableColumns.forEach((column) => {
      columns.push(column.columnName);
    });
    return columns;
  }

  // TODO fix or remove
  public updateColumnName(dailySlaDate: string, estimatedDate: string, index: string) {
    const column = this.getTableColumn(index);
    if (!column) {
      return;
    }

    setTimeout(() => {
      if (dailySlaDate) {
        if (this.getTableColumn(dailySlaDate)) {
          return;
        }
        column.columnName = dailySlaDate;
        column.headerFullName = dailySlaDate;
        column.headerName = dailySlaDate;
      } else {
        if (this.getTableColumn(estimatedDate)) {
          return;
        }
        column.columnName = estimatedDate;
        column.headerFullName = estimatedDate;
        column.headerName = estimatedDate;
      }
    }, 0);
  }

  public getTableColumn(columnName: string): DetailsTabColumn<ConfigDataType> | undefined {
    return this.tableColumns.find((currentColumn) => currentColumn.columnName === columnName);
  }

  public isColumnSortable(columnName: string): boolean {
    return this.tableColumns.some((column) => column.columnName === columnName && column.sortable);
  }

}
