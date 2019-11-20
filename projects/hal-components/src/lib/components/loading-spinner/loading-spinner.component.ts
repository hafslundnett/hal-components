import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'hal-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingSpinnerComponent implements OnInit {

  @Input() color = '';

  constructor() { }

  ngOnInit() {
    this.loadingSpinnerContainer.nativeElement.style.cssText = this.getCssText();
  }

  private getCssText() {
    return this.color;
  }

}
