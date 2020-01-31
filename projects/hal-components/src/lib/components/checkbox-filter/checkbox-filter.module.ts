import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxFilterComponent } from './checkbox-filter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CheckboxFilterComponent],
  exports: [CheckboxFilterComponent]
})
export class CheckboxFilterModule { }
