import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.model';


@Component({
  selector: 'hal-svg-doc',
  templateUrl: './svg-doc.component.html',
  styleUrls: ['./svg-doc.component.scss']
})
export class SvgDocComponent implements OnInit {

  svgInputs = [
    new ApiTableRow('[Height]', 'Sets the height'),
    new ApiTableRow('[Width]', 'Sets the width'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
