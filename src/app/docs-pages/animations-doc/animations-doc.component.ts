import { Component } from '@angular/core';
import { scaleUp, scaleDown, curtainDown, heightDown, listAnimation } from '@hafslundnett/hal-components';

@Component({
  selector: 'hal-animations-doc',
  templateUrl: './animations-doc.component.html',
  styleUrls: ['./animations-doc.component.scss'],
  animations: [ scaleUp, scaleDown, curtainDown, heightDown, listAnimation ]
})
export class AnimationsDocComponent {

  isUpbox = true;
  isDownbox = true;
  isCurtain = false;
  isHeight = false;
  exampleList: string[] = ['Item' , 'Item' , 'Item'];

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
      this.exampleList.push('Item');
    }
  }
  removeItem() {
    this.exampleList.pop();
  }

  toggleHeight() {
    this.isHeight = !this.isHeight;
  }
}
