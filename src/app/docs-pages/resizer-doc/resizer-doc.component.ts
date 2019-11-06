import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hal-resizer-doc',
  templateUrl: './resizer-doc.component.html',
  styleUrls: ['./resizer-doc.component.scss']
})
export class ResizerDocComponent implements OnInit {

  htmlCode = `<!-- Horizontal resizer -->
<div class="resize-boxes-horizontal" #Horizontal> 
  You can resize me horizontally!
</div>
<hal-resizer 
[minHeight]="140" 
[resizableElement]="Horizontal" 
[resizeDirection]="'horisontal'"
></hal-resizer>

<!-- Vertical resizer -->
<div class="vertical-container">
  <div class="resize-boxes-vertical" #Vertical>
    You can resize me vertically!
  </div>
  <hal-resizer 
  [resizableElement]="Vertical" 
  [resizeDirection]="'vertical'"
  ></hal-resizer>
</div>
`;

  constructor() { }

  ngOnInit() {
  }

}
