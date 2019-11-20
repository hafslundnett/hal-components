import { Pipe, PipeTransform } from '@angular/core';
import { TableEngine } from '../../table-engine/table-engine';

@Pipe({
  name: 'isColumnSortable'
})
export class IsColumnSortablePipe implements PipeTransform {

  transform(currentColumnName: string, currentConfig: TableEngine<any>): boolean { // AnalysisTableData
    return currentConfig.isColumnSortable(currentColumnName);
  }

}
