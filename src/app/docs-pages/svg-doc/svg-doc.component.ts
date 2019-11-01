import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.model';


@Component({
  selector: 'hal-svg-doc',
  templateUrl: './svg-doc.component.html',
  styleUrls: ['./svg-doc.component.scss']
})
export class SvgDocComponent implements OnInit {

  svgInputs = [
    new ApiTableRow('*[Height]', 'Optional input to change the height property of the svg element'),
    new ApiTableRow('*[Width]', 'Optional input to change the width property of the svg element'),
    new ApiTableRow('[colorStroke]', 'Optional input to change the stroke property of the svg element'),
    new ApiTableRow('[colorFill]', 'Optional input to change the fill property of the svg element'),
    new ApiTableRow('[svgFilePath]', 'Set this to the path of the svg file you want to display'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
