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
import { DetailsTabColumn } from './details-tab-column.interface';
import { PaginationConfig } from '../../paginator/pagination-config.interface';

// TableDataType was AnalysisTableData in drops
export class TableViewerBase implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input() tableData: any[] = []; // TableDataType
  @Input() sliceSize = 0;
  @Input() paginationOptions: undefined | number[];

  @Input() tableConfig: any; // : ConfigDataTypes;
  @Input() tableConfigStatic: any; // : ConfigDataTypesStatic;

  // sorted and only active
  dynamicColumns: DetailsTabColumn<any>[]; // TableDataType

  columnsDefinitions: string[] = [];
  dataSource = new MatTableDataSource<any>([]);

  initialTableDataLoaded = false;

  slicedList: number[];
  pagination: PaginationConfig = {
    pageSize: 10,
    pageIndex: 0,
    length: 5
  };

  // consider remove
  private subscriptions = new Subscription();

  constructor(
  ) {
  }

  ngOnInit() {
    this.setupDynamicColumns();
    this.setupSortingInternal();
    this.ngOnInitEx();

    if (this.paginationOptions) {
      this.setupPagination();
    } else {
      // for improving speed:
      // https://github.com/angular/components/issues/11953#issuecomment-461434437
      this.initialTableDataLoaded = true;
      this.updateDataSource();
    }
  }

  ngAfterViewInit() {
    this.ngAfterViewInitEx();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.tableData && this.initialTableDataLoaded) {
      this.updateDataSource();
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

  newPaginatorEvent(changes: PaginationConfig): void {
    this.updatePaginatorValues(changes);
    this.dataSource.data = this.getPageData();
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

  private updateDataSource() {
    if (this.paginationOptions) {
      this.dataSource.data = this.getPageData();
      this.pagination.length = this.tableData.length;
    } else {
      this.dataSource.data = this.tableData;
    }
  }

  private setupPagination() {
    if (!this.paginationOptions) {
      return;
    }
    this.pagination = {
      pageSize: this.paginationOptions[0],
      pageIndex: 0,
      length: 0 // will be set later
    };
    this.updateDataSource();
  }

  private getPageData(): any[] {
    const from = this.pagination.pageIndex * this.pagination.pageSize;
    const to = (this.pagination.pageIndex * this.pagination.pageSize) + this.pagination.pageSize;
    return this.tableData.slice(from, to);
  }

  private updatePaginatorValues(changes: PaginationConfig): void {
    this.pagination.length = changes.length;
    this.pagination.pageIndex = changes.pageIndex;
    this.pagination.pageSize = changes.pageSize;
  }

  private setupSortingInternal() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = this.setupSorting;
  }
}
