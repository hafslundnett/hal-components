import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-status-mark-doc',
  templateUrl: './status-mark-doc.component.html',
  styleUrls: ['./status-mark-doc.component.scss']
})
export class StatusMarkDocComponent implements OnInit {

  status = true;

  apiTableRows: ApiTableRow[] = [
    { apiInput: '[status]', description: 'Input for setting the status as a either true or false.' },
    {
      apiInput: '[showBlankWhenFalse]',
      description:
        'Input for deciding if the false status is hidden(blank) or displayed. When true the cross-illustration(false) will not be shown.'
    },
  ];

  htmlCode = `<button class="hdd-button example-btn" (click)="status = !status">Change to {{ !status }}</button>

<div class="flex-column">
  <span class="hdd-tooltip">
    <hal-status-mark [status]="status"></hal-status-mark>
    <span class="hdd-tooltip_content">
      Status mark {{ status }}
    </span>
  </span>

  <span class="hdd-tooltip">
    <hal-status-mark [status]="status" [showBlankWhenFalse]="true"></hal-status-mark>
    <span class="hdd-tooltip_content">
      Status mark {{ status }}
    </span>
  </span>
</div>
`;

  constructor() { }

  ngOnInit() {
  }

}
