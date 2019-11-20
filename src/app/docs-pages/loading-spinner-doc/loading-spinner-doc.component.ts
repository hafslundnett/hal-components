import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-loading-spinner-doc',
  templateUrl: './loading-spinner-doc.component.html',
  styleUrls: ['./loading-spinner-doc.component.scss']
})
export class LoadingSpinnerDocComponent implements OnInit {

  loadingSpinnerTable: ApiTableRow[] = [
    // tslint:disable-next-line:max-line-length
    { apiInput: '[color]', description: 'Set the color of the loading spinner, use HDD-Style color variables' },
  ];

  htmlCode = `<hal-loading-spinner></hal-loading-spinner>`;

  constructor() { }

  ngOnInit() {
  }

}
