import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';
import { PaginationConfig } from '@hafslundnett/hal-components';

@Component({
  selector: 'hal-paginator-doc',
  templateUrl: './paginator-doc.component.html',
  styleUrls: ['./paginator-doc.component.scss']
})
export class PaginatorDocComponent implements OnInit {
  paginatorInput: ApiTableRow[] = [
    { apiInput: '[length]', description: 'The number of elements (total) in the dataset.' },
    { apiInput: '[pageSizeOptions]', description: 'The page size options that should be available. Default is [10, 20].' },
    { apiInput: '[selectedPageSize]', description: 'The page size initially selected. Default is 10.' },
    { apiInput: '[unit]', description: 'Optional input to change name of elements to select between. Default is "elementer".' },
    { apiInput: '[selectedPageIndex]', description: 'Optional input sets selected page. Default is 0.' },
    { apiInput: '[showPaging]', description: 'Optional input to hide or show paging. Is true by default' },
    { apiInput: '[allowAll]', description: 'Optional input to hide or show the "Alle" page size option. When selecting "Alle" all elements in the dataset will show. Default is true.' },
    { apiInput: '(paginatorChange)', description: 'Detects paginator changes.' },
  ];

  htmlCode = `<hal-paginator
  [length]="pagination?.length"
  [pageSizeOptions]="pageSizeOptions"
  [selectedPageSize]="pagination?.pageSize"
  [selectedPageIndex]="pagination?.pageIndex"
  (paginatorChange)="changePaginator($event)">
</hal-paginator>`;

  tsCode = `listOfNumbers: number[] = Array.from(Array(25).keys());
slicedList: number[];
pagination: PaginationConfig = {
  pageSize: 0,
  pageIndex: 0,
  length: 0
};
pageSizeOptions = [2, 5, 10, 25];

ngOnInit() {
  this.pagination.length = this.listOfNumbers.length;
  this.pagination.pageIndex = 0;
  this.pagination.pageSize = 2;
  this.changePaginator();
}

changePaginator(changes?: SimpleChanges): void {
  if (changes) {
    this.updatePaginatorValues(changes);
  }
  this.slicedList = this.listOfNumbers.slice(
    this.pagination.pageSize * this.pagination.pageIndex,
    this.pagination.pageSize * (this.pagination.pageIndex + 1)
  );
}

updatePaginatorValues(changes): void {
  this.pagination.length = changes.length;
  this.pagination.pageIndex = changes.pageIndex;
  this.pagination.pageSize = changes.pageSize;
}`;

  listOfNumbers: number[] = Array.from(Array(25).keys());
  slicedList: number[];
  pagination: PaginationConfig = {
    pageSize: 0,
    pageIndex: 0,
    length: 0
  };
  pageSizeOptions = [2, 5, 25];

  constructor() { }

  ngOnInit() {
    this.pagination.length = this.listOfNumbers.length;
    this.pagination.pageIndex = 0;
    this.pagination.pageSize = 2;
    this.changePaginator();
  }

  changePaginator(changes?: SimpleChanges): void {
    if (changes) {
      this.updatePaginatorValues(changes);
    }
    this.slicedList = this.listOfNumbers.slice(
      this.pagination.pageSize * this.pagination.pageIndex,
      this.pagination.pageSize * (this.pagination.pageIndex + 1)
    );
  }

  updatePaginatorValues(changes): void {
    this.pagination.length = changes.length;
    this.pagination.pageIndex = changes.pageIndex;
    this.pagination.pageSize = changes.pageSize;
  }

}
