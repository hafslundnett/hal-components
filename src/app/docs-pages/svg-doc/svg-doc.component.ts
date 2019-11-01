import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';


@Component({
  selector: 'hal-svg-doc',
  templateUrl: './svg-doc.component.html',
  styleUrls: ['./svg-doc.component.scss']
})
export class SvgDocComponent implements OnInit {

  svgInputs: ApiTableRow[] = [
    {apiInput: '*[Height]', description: 'Optional input to change the height property of the svg element'},
    {apiInput: '*[Width]', description: 'Optional input to change the width property of the svg element'},
    {apiInput: '[colorStroke]', description: 'Optional input to change the stroke property of the svg element'},
    {apiInput: '[colorFill]', description: 'Optional input to change the fill property of the svg element'},
    {apiInput: '[svgFilePath]', description: 'Set this to the path of the svg file you want to display'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
