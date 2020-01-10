import { Component } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';
import { scaleUp, scaleDown, curtainDown, heightDown, listAnimation } from '@hafslundnett/hal-components';

@Component({
  selector: 'hal-animations-doc',
  templateUrl: './animations-doc.component.html',
  styleUrls: ['./animations-doc.component.scss'],
  animations: [ scaleUp, scaleDown, curtainDown, heightDown, listAnimation ]
})
export class AnimationsDocComponent {

  isUpbox = false;
  isDownbox = false;
  isCurtain = false;
  isHeight = false;
  exampleList: string[] = ['List Item', 'List Item', 'List Item'];

  AnimationsTable: ApiTableRow[] = [
    // tslint:disable-next-line:max-line-length
    { apiInput: '@scaleUp', description: 'Typical used for initiating components. Uses scaling and animates elements to \'pop\' in ' },
    // tslint:disable-next-line:max-line-length
    { apiInput: '@scaleDown', description: 'Opposite of @scaleUp, hides the component but does remove them from the dom. Uses scaling down and \'hides\' elements ' },
    // tslint:disable-next-line:max-line-length
    { apiInput: '@listAnimation', description: 'Animates lists on initiation based on height, and on list events such as an item being added or removed' },
    { apiInput: '@curtainDown', description: 'Creates a dropdown effect on elements with scaling' },
    // tslint:disable-next-line:max-line-length
    { apiInput: '@heightDown', description: 'Creates a dropdown effect on elements but without scaling, only based on height property of animated element' },
  ];

  tsCode = `// Add the imported animations to the @Components animations array
@Component({
  selector: 'hal-animations-doc',
  templateUrl: './animations-doc.component.html',
  styleUrls: ['./animations-doc.component.scss'],
  animations: [ scaleUp, scaleDown, curtainDown, heightDown, listAnimation ]
})
  `;

  htmlCode = `<!-- @scaleUp animation -->
<div class="animationBoxes" @scaleUp *ngIf="isUpbox">
  I'm animated with @scaleUp
</div>

<!-- @listAnimation  -->
<ul [@listAnimation]="exampleList.length">
  <li *ngFor="let item of exampleList"> {{ item }}</li>
</ul>

<!-- @curtainDown  -->
<div class="hdd-card" *ngIf="isCurtain" @curtainDown>
  <div class="hdd-card_header">
    <div class="hdd-card_header_text">
      <div class="hdd-card_title">Im a Card</div>
    </div>
  </div>
</div>`;

  constructor() { }

  toggleUpBox() {
    this.isUpbox = !this.isUpbox;
  }
  toggleDownBox() {
    this.isDownbox = !this.isDownbox;
  }
  toggleCurtains() {
    this.isCurtain = !this.isCurtain;
  }
  addItem() {
    if (this.exampleList.length < 10) {
      this.exampleList.push('List Item');
    }
  }
  removeItem() {
    this.exampleList.pop();
  }
  toggleHeight() {
    this.isHeight = !this.isHeight;
  }

}
