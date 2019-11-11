import { Component, OnInit, Input } from '@angular/core';
import { DocListItem } from '../../models/doc-list-item.interface';

@Component({
  selector: 'hal-doc-sublist',
  templateUrl: './doc-sublist.component.html',
  styleUrls: ['./doc-sublist.component.scss']
})
export class DocSublistComponent implements OnInit {

  @Input() elements: DocListItem[];

  constructor() { }

  ngOnInit() {
  }

}
