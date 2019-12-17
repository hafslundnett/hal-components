import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { Pagination } from './pagination';
import { DEFAULT_PAGE_SIZE } from './consts';
import { SelectData } from '../selector/select-data.interface';

@Component({
  selector: 'hal-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() unit = 'elementer';
  @Input() allowAll = true;
  @Input() selectedPageIndex = 0;
  @Input() length = 0;
  @Input() pageSizeOptions = [10, 20];
  @Input() selectedPageSize = DEFAULT_PAGE_SIZE;

  @Input()
  get showPaging(): boolean {
    return this._showPaging;
  }
  set showPaging(showPaging: boolean) {
    this._showPaging = coerceBooleanProperty(showPaging);
  }
  private _showPaging = true;

  @Output() paginatorChange = new EventEmitter<Pagination>();

  availablePageSizes: number[] = [];
  pages: number[] = [];
  selectData: SelectData[] = [];
  selectedPageSizeSelect: string;
  selectedChange: string;

  ngOnInit() {
    this.setSelectOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedPageSize || changes.pageSizeOptions || changes.length) {
      this.initPaginator();
    }
  }

  setSelectOptions() {
    this.pageSizeOptions.forEach((option) => {
      const val: SelectData = {value: option.toString(), viewValue: option.toString()};
      this.selectData.push(val);
    });
    const alleVal: SelectData = {value: 'Alle', viewValue: 'Alle'};
    if (this.allowAll) {
      this.selectData.push(alleVal);
    }
  }

  setPage(page: number) {
    this.selectedPageIndex = page;
    this.paginatorChange.emit({
      pageSize: this.selectedPageSize,
      length: this.length,
      pageIndex: this.selectedPageIndex
    });
  }

  setPageSize(pageSize: string) {
    pageSize === 'Alle' ? this.selectedPageSize = 10000 : this.selectedPageSize = +pageSize;
    this.setNumberOfPages();
    this.selectedPageIndex = 0;

    this.paginatorChange.emit({
      length: this.length,
      pageIndex: 0,
      pageSize: this.selectedPageSize
    });
  }

  private initPaginator(): void {
    this.availablePageSizes = this.getAvailablePageSizes();
    this.setNumberOfPages();
    if (this.length < this.pageSizeOptions[0]) {
      this.selectedPageSizeSelect = this.length.toString();
    } else {
      if (this.selectedPageSize === 10000) {
        this.selectedPageSizeSelect = 'Alle';
      } else {
        this.selectedPageSizeSelect = this.selectedPageSize.toString();
      }
    }
  }

  private getAvailablePageSizes() {
    if (this.length > this.pageSizeOptions[0]) {
      return this.pageSizeOptions.filter(option => option <= this.length);
    } else {
      return [this.length];
    }
  }

  private setNumberOfPages(): void {
    if (this.selectedPageSize) {
      this.pages = [];
      for (let i = 0; i < Math.ceil(this.length / this.selectedPageSize); i++) {
        this.pages.push(i);
      }
    }
  }
}
