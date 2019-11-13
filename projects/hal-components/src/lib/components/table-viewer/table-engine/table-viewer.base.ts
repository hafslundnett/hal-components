import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  OnChanges,
  OnInit,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DetailsTabColumn } from './table-engine';

// TableDataType was AnalysisTableData in drops
export class TableViewerBase implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() tableData: any[] = []; // TableDataType
  @Input() sliceSize = 0;
  @Input() originalMeteringPointIds: string[] = [];

  @Input() tableConfig: any; // : ConfigDataTypes;
  @Input() tableConfigStatic: any; // : ConfigDataTypesStatic;

  // sorted and only active
  dynamicColumns: DetailsTabColumn<any>[]; // TableDataType

  columnsDefinitions: string[] = [];
  dataSource = new MatTableDataSource<any>([]);

  initialTableDataLoaded = false;

  // consider remove
  private subscriptions = new Subscription();

  constructor(
    // protected tableSettingsService: TableSettingsService,
  ) {
  }

  ngOnInit() {
    this.setupDynamicColumns();

    this.dataSource.paginator = this.paginator; // <-- takes 100 ms!
    if (this.paginator) {
      this.paginator.pageSize = this.sliceSize;
    }
    this.setupSortingInternal();

    // for improving speed:
    // https://github.com/angular/components/issues/11953#issuecomment-461434437
    this.initialTableDataLoaded = true;
    this.dataSource.data = this.tableData;

    this.ngOnInitEx();
  }

  ngAfterViewInit() {
    this.ngAfterViewInitEx();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.paginator) {
      this.paginator.pageSize = this.sliceSize;
    }
    if (this.tableData && this.initialTableDataLoaded) {
      this.dataSource.data = this.tableData;
    }
    this.ngOnChangesEx(changes);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  ngOnInitEx() { }

  ngOnChangesEx(changes: SimpleChanges) { }

  ngAfterViewInitEx() { }

  tableColumnsTrackBy(index, item: DetailsTabColumn<any>) {
    return item.columnName;
  }

  protected setupSorting(data: any, columnId: string) {
    // overwrite this
    // (tip its the same below as returned by each display func! ALMOST, not for date and num)
    switch (columnId) {
      default: return data[columnId];
    }
  }

  // change order and remove columns
  protected setupDynamicColumns() {
    // no re-ordering is default in base class
    this.dynamicColumns = this.tableConfig.tableColumns;
    this.columnsDefinitions = this.columnsDefinitions.concat(this.tableConfig.getAllColumnNames());
  }

  private setupSortingInternal() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = this.setupSorting;
  }
}
