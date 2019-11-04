import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-divider-doc',
  templateUrl: './divider-doc.component.html',
  styleUrls: ['./divider-doc.component.scss']
})
export class DividerDocComponent implements OnInit {

  dividerInput: ApiTableRow[] = [
    { apiInput: 'ligth', description: 'Optional input to make the line ligth/hidden or not' },
  ];

  htmlCode = `<hal-divider></hal-divider> <!--Display the line-->
<hal-divider light></hal-divider> <!--Hide the line-->`;

  constructor() { }

  ngOnInit() {
  }

}
