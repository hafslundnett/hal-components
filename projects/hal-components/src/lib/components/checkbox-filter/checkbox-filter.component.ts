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

  sumOfQuantity = 0;
  checkedOptions: FilterOption[];
  allChecked = false;

  constructor() { }

  ngOnInit() {
    this.initCheckedOptions();
    this.initSumOfQuantites();
  }

  initCheckedOptions(): void {
    this.checkedOptions = this.filterOptions.filter(option => option.checked === true);
  }

  initSumOfQuantites(): void {
    this.filterOptions.forEach(option => {
      this.sumOfQuantity += option.quantity;
    });
  }

  onCheckedChange(): void {
    console.log(this.allChecked);
  }

  selectAllOptions(): void {
    this.checkedOptions = this.filterOptions;
  }

  deselectAllOptions(): void {
    this.checkedOptions = [];
  }

  deselectAllOption(): void {
    this.allChecked = false;
  }

}
