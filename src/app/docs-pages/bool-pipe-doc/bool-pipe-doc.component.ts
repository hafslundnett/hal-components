import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hal-bool-pipe-doc',
  templateUrl: './bool-pipe-doc.component.html',
  styleUrls: ['./bool-pipe-doc.component.scss']
})
export class BoolPipeDocComponent implements OnInit {

  booleanValue = false;

  htmlCode = `<button class="hdd-button" (click)="booleanValue =! booleanValue">
  Change to <b>{{ !booleanValue }}</b>
</button>
<p class="example-text">
  Boolean value <b>{{ booleanValue }}</b> is tranformed
  to <b>{{ booleanValue | bool }}</b>
</p>`;


  constructor() { }

  ngOnInit() {
  }

}
