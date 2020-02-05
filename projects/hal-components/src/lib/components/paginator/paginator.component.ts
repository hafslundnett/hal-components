import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, OnInit, ElementRef, ɵConsole } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { DEFAULT_PAGE_SIZE } from './consts';
import { SelectOption } from '../selector/select-option.interface';
import { PaginationConfig } from './pagination-config.interface';

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

  @Output() paginatorChange = new EventEmitter<PaginationConfig>();

  pages: number[] = [];
  selectOptions: SelectOption[] = [];
  selectedPageSizeSelect: string;
  selectedChange: string;
  selectAllValue = 'selectAllValue';
  availablePageSizes: number[] = [];
  allChoiceActive = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedPageSize || changes.pageSizeOptions || changes.allowAll || (changes.length && !this.allChoiceActive)) {
      this.initPaginator();
    }

    if (changes.length && this.allChoiceActive) {
      this.updateAllSelectedValue();
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
    if (pageSize === this.selectAllValue) {
      this.allChoiceActive = true;
      this.selectedPageSize = this.length;
    } else {
      this.allChoiceActive = false;
      this.selectedPageSize = +pageSize;
    }
    this.setNumberOfPages();
    this.selectedPageIndex = 0;

    this.paginatorChange.emit({
      length: this.length,
      pageIndex: 0,
      pageSize: this.selectedPageSize
    });
  }

  private updateAllSelectedValue() {
    requestAnimationFrame(() => {
      this.selectedPageSize = this.length;
      this.setNumberOfPages();
      this.paginatorChange.emit({
        length: this.length,
        pageIndex: 0,
        pageSize: this.selectedPageSize
      });
    });
  }

  private initPaginator(): void {
    this.setNumberOfPages();
    this.setSelectOptions();
    if (this.length < this.pageSizeOptions[0]) {
      this.selectedPageSizeSelect = this.length.toString();
    } else {
      if (this.selectedPageSize === this.length) {
        this.selectedPageSizeSelect = this.selectAllValue;
      } else {
        this.selectedPageSizeSelect = this.selectedPageSize.toString();

        if (!this.pageSizeOptions.some(current => current.toString() === this.selectedPageSizeSelect)) {
          console.warn('selectedPageSize is not an option in the given pageSizeOptions');
        }
      }
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

  private setSelectOptions() {
    this.availablePageSizes = this.getAvailablePageSizes();
    this.selectOptions = this.availablePageSizes
      .map(option => {
        const val: SelectOption = { value: option.toString(), viewValue: option.toString() };
        return val;
      });
    if (this.allowAll) {
      const selectAll: SelectOption = { value: this.selectAllValue, viewValue: 'Alle' };
      this.selectOptions.push(selectAll);
    }
  }

  private getAvailablePageSizes() {
    if (this.length > this.pageSizeOptions[0]) {
      if (this.allowAll) {
        return this.pageSizeOptions.filter(option => option < this.length);
      } else {
        return this.pageSizeOptions.filter(option => option <= this.length);
      }
    } else {
      return [this.length];
    }
  }
}
