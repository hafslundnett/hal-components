import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';
import { Pagination } from '@hafslundnett/hal-components';
import { Subscription } from 'rxjs';

@Component({
  selector: 'hal-paginator-doc',
  templateUrl: './paginator-doc.component.html',
  styleUrls: ['./paginator-doc.component.scss']
})
export class PaginatorDocComponent implements OnInit {
  paginatorInput: ApiTableRow[] = [
    { apiInput: 'unit', description: 'Optional input to make the some' },
    { apiInput: 'allowSelectAll', description: 'Optional input to make the some' },
    { apiInput: 'selectedPageIndex', description: 'Optional input to make the some' },
    { apiInput: 'length', description: 'Optional input to make the some' },
    { apiInput: 'pageSizeOptions', description: 'Optional input to make the some' },
    { apiInput: 'selectedPageSize', description: 'Optional input to make the some' },
    { apiInput: 'showPaging', description: 'Optional input to make the some' },
  ];

  tsCode = `pageSizeOptions = [5, 10, 25, 50];

ngOnInit() {
  this.pagination.length = this.someList.length;
  this.pagination.pageIndex = 0;
  this.pagination.pageSize = 5;
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
  pageSizeOptions = [5, 10, 25, 50];

  constructor() { }

  ngOnInit() {
    this.pagination.length = this.someList.length;
    this.pagination.pageIndex = 0;
    this.pagination.pageSize = 5;
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
