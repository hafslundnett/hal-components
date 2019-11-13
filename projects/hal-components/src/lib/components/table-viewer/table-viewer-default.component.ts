import {
  Component,
  Input,
  ViewChild,
  SimpleChanges,
  ViewEncapsulation,
  ElementRef
} from '@angular/core';
import { TableViewerBase } from './table-engine/table-viewer.base';

// view encapsulation is off, be careful!
@Component({
  selector: 'hal-table-viewer-default',
  templateUrl: './table-viewer-default.component.html',
  styleUrls: ['./table-viewer-default.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class TableViewerDefaultComponent extends TableViewerBase {

  @ViewChild('defaultTable', { read: ElementRef, static: true }) defaultTable;
  @Input() filteredTableConfig: any; // ConfigDataTypes

  constructor(
  ) {
    super();
  }

  // add your own sorting logic to this function
  protected setupSorting(data: any, columnId: string) {
    switch (columnId) {
      default: return data[columnId];
    }
  }

  protected setupDynamicColumns() {
    this.dynamicColumns = this.filteredTableConfig.tableColumns;
    this.columnsDefinitions = this.dynamicColumns.map(current => current.columnName);
  }

  ngOnChangesEx(changes: SimpleChanges) {
    if (changes.filteredTableConfig && changes.filteredTableConfig.previousValue) {
      // consider only if new filteredTableConfig is different
      this.setupDynamicColumns();
    }
  }

}
