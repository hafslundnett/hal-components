import { Component, OnInit, Input } from '@angular/core';
import { ApiTableRow } from '../models/api-table-row.model';

@Component({
  selector: 'hal-doc-api-table',
  templateUrl: './doc-api-table.component.html',
  styleUrls: ['./doc-api-table.component.scss']
})
export class DocApiTableComponent implements OnInit {

  @Input() apiTableHeader = "Method/Input";
  @Input() apiTableRows:ApiTableRow[] = [];

  constructor() { }

  ngOnInit() {
  }

}
