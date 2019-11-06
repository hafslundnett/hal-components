import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-closable-row-doc',
  templateUrl: './closable-row-doc.component.html',
  styleUrls: ['./closable-row-doc.component.scss']
})
export class ClosableRowDocComponent implements OnInit {

  closeableRowInputs: ApiTableRow[] = [
    { apiInput: '[rowTitle]', description: 'Set the title in the header of the closeable row' },
    // tslint:disable-next-line:max-line-length
    { apiInput: '[rowTitleIcon]', description: 'Optional input to input a font awesome icon in front of the title. Only needs last class declaration, like ´fa-expand´ instead of full `fal fa-expand`' },
    { apiInput: '[noPadding]', description: 'Optional input to add padding to the collapsebale body if the row' },
    { apiInput: '[startExpanded]', description: 'Optional input to iniate the row expanded or not' }
  ];

  htmlCode = `<hal-closable-row
  [rowTitle]="'Closeable-Row Example'"
  [rowTitleIcon]="'fa-expand'"
  [noPadding]="false"
  [startExpanded]="true">
  Put content here
</hal-closable-row>`;

  constructor() { }

  ngOnInit() {
  }

}
