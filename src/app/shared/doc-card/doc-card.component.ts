import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hal-doc-card',
  templateUrl: './doc-card.component.html',
  styleUrls: ['./doc-card.component.scss']
})
export class DocCardComponent implements OnInit {

  @Input() docUrl =  '';

  constructor() { }

  ngOnInit() {
  }

}
