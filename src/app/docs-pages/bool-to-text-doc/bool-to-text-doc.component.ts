import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hal-bool-to-text-doc',
  templateUrl: './bool-to-text-doc.component.html',
  styleUrls: ['./bool-to-text-doc.component.scss']
})
export class BoolToTextDocComponent implements OnInit {

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
