import { Component, OnInit, Input } from '@angular/core';
import { FilterOption } from './filter-option';

@Component({
  selector: 'hal-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss']
})
export class CheckboxFilterComponent implements OnInit {

  @Input() filterOptions: FilterOption;

  constructor() { }

  ngOnInit() {
  }

}
