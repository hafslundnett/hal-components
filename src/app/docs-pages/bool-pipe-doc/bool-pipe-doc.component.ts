import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hal-bool-pipe-doc',
  templateUrl: './bool-pipe-doc.component.html',
  styleUrls: ['./bool-pipe-doc.component.scss']
})
export class BoolPipeDocComponent implements OnInit {

  booleanValue = false;

  constructor() { }

  ngOnInit() {
  }

  htmlCode = `<hal-divider></hal-divider>
<hal-divider light></hal-divider>`;

}
