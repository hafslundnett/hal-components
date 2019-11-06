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
    { apiInput: '[resizeDirection]', description: "Set this this to either 'vertical' or 'horizontal', depending on which direction you wish to resize" },
    { apiInput: '[minHeight]', description: 'Optional input set the minimum height in px, of an element to be horizontally resized' },
    { apiInput: '[maxHeigth]', description: 'Optional input set the maximum height in px, of an element to be horizontally resized' },
    { apiInput: '[minWidth]', description: 'Optional input set the minimum width in %, of an element to be vertically resized' },
    { apiInput: '[maxWidth]', description: 'Optional input set the maximum width in %, of an element to be vertically resized' },
  ];

  htmlCode = `<!-- Horizontal resizer -->
  <div class="resize-box-horizontal" #ExampleBox1> 
    You can resize me horizontally!
  </div>
  <hal-resizer 
  [minHeight]="140"
  [maxHeigth]="400"
  [resizableElement]="ExampleBox1" 
  [resizeDirection]="'horizontal'"
  ></hal-resizer>
  <br>

  <!-- Vertical resizer -->
  <div class="vertical-container">
    <div class="resize-box-vertical" #ExampleBox2>
      You can resize me vertically!
    </div>
    <hal-resizer 
    [maxWidth]="100" 
    [minWidth]="30"
    [resizableElement]="ExampleBox2" 
    [resizeDirection]="'vertical'"
    ></hal-resizer>
  </div>
`;

  constructor() { }

  ngOnInit() {
  }
  
}
