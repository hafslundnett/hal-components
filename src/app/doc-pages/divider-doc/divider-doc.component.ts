import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-divider-doc',
  templateUrl: './divider-doc.component.html',
  styleUrls: ['./divider-doc.component.scss']
})
export class DividerDocComponent implements OnInit {

  dividerInput: ApiTableRow[] = [
    { apiInput: 'light', description: 'Optional input to make the line ligth or not' },
  ];

  htmlCode = `<hal-divider></hal-divider>
<hal-divider light></hal-divider>`;

  constructor() { }

  ngOnInit() {
  }

}
