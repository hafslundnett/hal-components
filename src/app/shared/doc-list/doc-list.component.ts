import { Component, OnInit } from '@angular/core';
import { Pages } from '../models/pages.enum';

@Component({
  selector: 'hal-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.scss']
})
export class DocListComponent implements OnInit {

  public readonly pages = Pages;

  constructor() { }

  ngOnInit() {
  }

}
