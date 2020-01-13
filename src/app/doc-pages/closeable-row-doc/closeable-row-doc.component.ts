import { Component } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-closeable-row-doc',
  templateUrl: './closeable-row-doc.component.html',
  styleUrls: ['./closeable-row-doc.component.scss']
})
export class CloseableRowDocComponent {

  closeableRowInputs: ApiTableRow[] = [
    // tslint:disable-next-line:max-line-length
    { apiInput: '[noPadding]', description: 'Optional input to remove the padding of the collapsible body. Default behaviour with no input is to set the body with padding' },
    // tslint:disable-next-line:max-line-length
    { apiInput: '[startExpanded]', description: 'Optional input to initiate the row as expanded or not.Default behaviour with no input is to initiate the row as expanded' }
  ];

  htmlCode = `<hal-closeable-row [noPadding]="true" [startExpanded]="false">
  <ng-container ngProjectAs="RowHeader">
    Closebale-Row Header Example
  </ng-container>
  <ng-container ngProjectAs="RowBody">
    The content inside the body of the closeable-row.
  </ng-container>
</hal-closeable-row>`;

}
