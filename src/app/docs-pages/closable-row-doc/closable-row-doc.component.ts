import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-closable-row-doc',
  templateUrl: './closable-row-doc.component.html',
  styleUrls: ['./closable-row-doc.component.scss']
})
export class ClosableRowDocComponent {

  closeableRowInputs: ApiTableRow[] = [
    { apiInput: '[noPadding]', description: 'Optional input to add padding to the collapsebale body of the row' },
    { apiInput: '[startExpanded]', description: 'Optional input to iniate the row expanded or not' }
  ];

  htmlCode = `<hal-closable-row [noPadding]="true" [startExpanded]="false">
  <ng-container ngProjectAs="RowHeader">
    Closebale-Row Header Example
  </ng-container>
  <ng-container ngProjectAs="RowBody">
    The content inside the body of the closeable-row.
  </ng-container>
</hal-closable-row>`;

}
