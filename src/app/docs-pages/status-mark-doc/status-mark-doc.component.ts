import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-status-mark-doc',
  templateUrl: './status-mark-doc.component.html',
  styleUrls: ['./status-mark-doc.component.scss']
})
export class StatusMarkDocComponent implements OnInit {

  apiTableRows: ApiTableRow[] = [
    { apiInput: '[status]', description: 'Input for setting the status as a either true or false.' },
  ];

  htmlCode = `<span class="hdd-tooltip">
  <hal-status-mark class="spacing"></hal-status-mark>
  <span class="hdd-tooltip_content is-leaning-left">
    Status mark true
  </span>
</span>
<span class="hdd-tooltip">
  <hal-status-mark [status]="false" class="spacing"></hal-status-mark>
  <span class="hdd-tooltip_content is-leaning-right">
    Status mark false
  </span>
</span>
`;

  constructor() { }

  ngOnInit() {
  }

}
