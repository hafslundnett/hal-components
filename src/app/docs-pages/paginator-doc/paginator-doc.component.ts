import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-paginator-doc',
  templateUrl: './paginator-doc.component.html',
  styleUrls: ['./paginator-doc.component.css']
})
export class PaginatorDocComponent implements OnInit {

  dividerInput: ApiTableRow[] = [
    { apiInput: 'some', description: 'Optional input to make the some' },
  ];

  htmlCode = ``;

  constructor() { }

  ngOnInit() {
  }

}
