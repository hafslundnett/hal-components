import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';
import { Pagination } from '@hafslundnett/hal-components';

@Component({
  selector: 'hal-paginator-doc',
  templateUrl: './paginator-doc.component.html',
  styleUrls: ['./paginator-doc.component.scss']
})
export class PaginatorDocComponent implements OnInit {
  paginatorInput: ApiTableRow[] = [
    { apiInput: '[length]', description: 'The length of entries of your data' },
    { apiInput: '[pageSizeOptions]', description: 'The page size options that should be available' },
    { apiInput: '[selectedPageSize]', description: 'The page size initially selected' },
    { apiInput: '[unit]', description: 'Optional input to change name of elements to select between' },
    { apiInput: '[selectedPageIndex]', description: 'Optional input sets selected page on index' },
    { apiInput: '[showPaging]', description: 'Optional input to hide or show paging. Is true by default' },
    { apiInput: '[allowAll]', description: 'Optional input to hide or show the "Alle" page size option. Is true by default' },
    { apiInput: '(paginatorChange)', description: 'Detects paginator changes' },
  ];

  htmlCode = `<hal-paginator
  [length]="pagination?.length"
  [pageSizeOptions]="pageSizeOptions"
  [selectedPageSize]="pagination?.pageSize"
  [selectedPageIndex]="pagination?.pageIndex"
  [allowAll]="true"
  (paginatorChange)="changePaginator($event)">
</hal-paginator>`;

  tsCode = `pageSizeOptions = [5, 10, 25];

ngOnInit() {pageSizeOptions = [2, 5, 10, 25];

constructor() { }

ngOnInit() {
  this.pagination.length = this.someList.length;
  this.pagination.pageIndex = 0;
  this.pagination.pageSize = 2;
  this.changePaginator();
}

changePaginator(changes?): void {
  if (changes) {
    this.updatePaginatorValues(changes);
  }
  this.slicedList = this.someList.slice(
    this.pagination.pageSize * this.pagination.pageIndex,
    this.pagination.pageSize * (this.pagination.pageIndex + 1)
  );
}

updatePaginatorValues(changes): void {
  this.pagination.length = changes.length;
  this.pagination.pageIndex = changes.pageIndex;
  this.pagination.pageSize = changes.pageSize;
}`;

  // tslint:disable-next-line:max-line-length
  someList: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];
  slicedList: string[];
  pagination: Pagination = {
    pageSize: 0,
    pageIndex: 0,
    length: 0
  };
  pageSizeOptions = [2, 5, 10, 25];

  constructor() { }

  ngOnInit() {
    this.pagination.length = this.someList.length;
    this.pagination.pageIndex = 0;
    this.pagination.pageSize = 2;
    this.changePaginator();
  }

  changePaginator(changes?): void {
    if (changes) {
      this.updatePaginatorValues(changes);
    }
    this.slicedList = this.someList.slice(
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
