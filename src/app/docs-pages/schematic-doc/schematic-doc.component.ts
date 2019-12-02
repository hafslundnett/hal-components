import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-schematic-doc',
  templateUrl: './schematic-doc.component.html',
  styleUrls: ['./schematic-doc.component.scss']
})
export class SchematicDocComponent implements OnInit {

  schematicList: ApiTableRow[] = [
    { apiInput: 'ng generate @hafslundnett/hal-components:docs-page', description: 'Generate a new docs page' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
