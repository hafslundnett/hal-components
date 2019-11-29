import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { Pagination } from './pagination';
import { DEFAULT_PAGE_SIZE } from './consts';

@Component({
  selector: 'hal-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnChanges {
  @Input() unit = 'elementer';
  @Input() allowSelectAlle = false;
  @Input() selectedPageIndex = 0;
  @Input() length = 0;
  @Input() pageSizeOptions = [10, 20, 50];
  @Input() selectedPageSize = DEFAULT_PAGE_SIZE;

  @Input()
  get showPaging(): boolean {
    return this._showPaging;
  }
  set showPaging(showPaging: boolean) {
    this._showPaging = coerceBooleanProperty(showPaging);
  }
  private _showPaging = true;

  // tslint:disable-next-line:no-output-native
  @Output() change = new EventEmitter<Pagination>();

  availablePageSizes: number[] = [];
  pages: number[] = [];

  selectedPageSizeSelect;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedPageSize || changes.pageSizeOptions || changes.length) {
      this.initPaginator();
    }
  }

  setPage(page: number) {
    this.selectedPageIndex = page;
    this.change.emit({
      pageSize: this.selectedPageSize,
      length: this.length,
      pageIndex: this.selectedPageIndex
    });
  }

  setPageSize(pageSize: number) {
    this.selectedPageSize = pageSize;
    this.setNumberOfPages();
    this.selectedPageIndex = 0;

    this.change.emit({
      length: this.length,
      pageIndex: 0,
      pageSize
    });
  }

  private initPaginator(): void {
    this.availablePageSizes = this.getAvailablePageSizes();
    this.setNumberOfPages();
    if (this.length < this.pageSizeOptions[0]) {
      this.selectedPageSizeSelect = this.length;
    } else {
      this.selectedPageSizeSelect = this.selectedPageSize;
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
