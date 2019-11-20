import { Pipe, PipeTransform } from '@angular/core';
import { TableEngine } from '../../table-engine/table-engine';
import { DetailsTabColumn } from '../../table-engine/details-tab-column.interface';
import { DisplayDataReturnType } from '../../table-engine/display-data-func.type';

@Pipe({
  name: 'displayConfigFindCss'
})
export class DisplayConfigFindCssPipe implements PipeTransform {

  transform(
    currentColumn: DetailsTabColumn<any>, // AnalysisTableData
    rowData: any, // AnalysisTableData
    currentConfig: TableEngine<any> // AnalysisTableData
  ): DisplayDataReturnType {
    const element = currentConfig.getTableColumn(currentColumn.columnName);
    if (!element) {
      return '';
    }
    if (!element.dynamicCssClasses) {
      return '';
    }
    return element.dynamicCssClasses(rowData);
  }
}
