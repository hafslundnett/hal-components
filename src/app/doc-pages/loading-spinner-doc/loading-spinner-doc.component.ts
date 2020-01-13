import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hal-loading-spinner-doc',
  templateUrl: './loading-spinner-doc.component.html',
  styleUrls: ['./loading-spinner-doc.component.scss']
})
export class LoadingSpinnerDocComponent implements OnInit {

  htmlCode = `<hal-loading-spinner></hal-loading-spinner>`;

  constructor() { }

  ngOnInit() {
  }

}
