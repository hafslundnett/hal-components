import { Pipe, PipeTransform } from '@angular/core';
import { TableEngine } from '../../table-engine/table-engine';
import { DetailsTabColumn } from '../../table-engine/details-tab-column.interface';

@Pipe({
  name: 'displayConfig'
})
export class DisplayConfigPipe implements PipeTransform {

  transform(
    currentColumn: DetailsTabColumn<any>, // AnalysisTableData
    rowData: any, // AnalysisTableData
    currentConfig: TableEngine<any>, // AnalysisTableData
  ): any { // TODO fix type
    const current = currentConfig.getTableColumn(currentColumn.columnName);
    if (!current) {
      return '';
    }
    const displayData = current.displayDataFunc(rowData);
    if (current.dateFormat || current.specialDisplayType) {
      return displayData;
    } else if ((displayData === undefined || displayData === null || displayData === '')) {
      return '';
    } else {
      return displayData;
    }
  }
}
