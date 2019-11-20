import { DetailsTabColumn } from './details-tab-column.interface';
import { DisplayDataFunc } from './display-data-func.type';

export abstract class TableEngine<ConfigDataType> {

  public tableColumns: DetailsTabColumn<ConfigDataType>[] = [];

  public name: string;
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

  /** sortable is default true */
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

  public getTableColumn(columnName: string): DetailsTabColumn<ConfigDataType> | undefined {
    return this.tableColumns.find((currentColumn) => currentColumn.columnName === columnName);
  }

  public isColumnSortable(columnName: string): boolean {
    return this.tableColumns.some((column) => {
      return column.columnName === columnName && column.sortable === true;
    });
  }

}
