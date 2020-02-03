import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { FilterOption } from './filter-option';

@Component({
  selector: 'hal-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss']
})
export class CheckboxFilterComponent implements OnInit {

  @Input() filterOptions: FilterOption[];
  @Input() allowMarkAllOption = true;
  @Input() filterTitle = '';
  @Input() allowSearchField = true;
  @Input() displayQuantityTags = false;

  sumOfQuantity = 200;

  constructor() { }

  ngOnInit() {
  }

}
