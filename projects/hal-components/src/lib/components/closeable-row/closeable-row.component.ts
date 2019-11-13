import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'hal-closeable-row',
  templateUrl: './closeable-row.component.html',
  styleUrls: ['./closeable-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CloseableRowComponent implements OnInit, AfterViewInit {

  @Input() noPadding = false;
  @Input() startExpanded = true;
  @Output() newOpenState = new EventEmitter<boolean>();
  @ViewChild('topLevelElement', { read: ElementRef, static: true }) topLevelElement;

  showContent = false;
  toggleEnabled = false;

  constructor() { }

  ngOnInit() {
    if (this.noPadding) {
      this.topLevelElement.nativeElement.style.cssText = '--body-padding: 0px 0px;';
    } else {
      this.topLevelElement.nativeElement.style.cssText = '--body-padding: 16px 24px;';
    }
    this.showContent = this.startExpanded;
  }

  ngAfterViewInit() {
    // to omit any init emit
    this.toggleEnabled = true;
  }

  toggle() {
    if (!this.toggleEnabled) {
      return;
    }
    this.showContent = !this.showContent;
    this.newOpenState.emit(this.showContent);
  }
}
