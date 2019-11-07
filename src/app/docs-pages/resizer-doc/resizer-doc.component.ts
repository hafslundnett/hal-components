import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-resizer-doc',
  templateUrl: './resizer-doc.component.html',
  styleUrls: ['./resizer-doc.component.scss']
})
export class ResizerDocComponent implements OnInit {

  resizerInputs: ApiTableRow[] = [
    { apiInput: '[resizableElement]', description: 'Targets the html element that you wish to resize' },
    { apiInput:
      '[resizeDirection]',
      description: 'Set this this to either \'vertical\' or \'horizontal\', depending on which direction you wish to resize' },
    { apiInput: '[minHeight]', description: 'Optional input set the minimum height in px, of an element to be vertically resized' },
    { apiInput: '[maxHeigth]', description: 'Optional input set the maximum height in px, of an element to be vertically resized' },
    { apiInput: '[minWidth]', description: 'Optional input set the minimum width in %, of an element to be horizontally resized' },
    { apiInput: '[maxWidth]', description: 'Optional input set the maximum width in %, of an element to be horizontally resized' },
  ];

  htmlCode = `<!-- Vertical resizer -->
  <div class="resize-box-vertical" #ExampleBox1>
    You can resize me Vertically!
  </div>
  <hal-resizer
  [minHeight]="140"
  [maxHeigth]="400"
  [resizableElement]="ExampleBox1"
  [resizeDirection]="'vertical'"
  ></hal-resizer>

  <!-- Horizontal resizer -->
  <div class="horizontal-container">
    <div class="resize-box-horizontal" #ExampleBox2>
      You can resize me horizontally!
    </div>
    <hal-resizer
    [maxWidth]="70"
    [minWidth]="30"
    [resizableElement]="ExampleBox2"
    [resizeDirection]="'horizontal'"
    ></hal-resizer>
    <div class="resize-box-horizontal">
      Im just a flexible box!
    </div>
  </div>
`;

  constructor() { }

  ngOnInit() {
  }
}
