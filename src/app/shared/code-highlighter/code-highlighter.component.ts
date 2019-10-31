import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hal-code-highlighter',
  templateUrl: './code-highlighter.component.html',
  styleUrls: ['./code-highlighter.component.scss']
})
export class CodeHighlighterComponent implements OnInit {

  @Input() isTS = false;
  @Input() isHTML = false;
  @Input() isSCSS = false;

  constructor() { }

  ngOnInit() {
  }

}
