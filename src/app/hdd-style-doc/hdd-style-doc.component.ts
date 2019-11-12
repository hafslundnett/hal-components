import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'hal-hdd-style-doc',
  templateUrl: './hdd-style-doc.component.html',
  styleUrls: ['./hdd-style-doc.component.scss']
})
export class HddStyleDocComponent implements OnInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  iframeLoaded() {
    requestAnimationFrame(() => {
      this.changeDetectorRef.detectChanges();
    });
  }

}
