import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxFilterComponent } from './checkbox-filter.component';
import { DividerModule } from '../divider/divider.module';

@NgModule({
  imports: [
    CommonModule,
    DividerModule
  ],
  declarations: [CheckboxFilterComponent],
  exports: [CheckboxFilterComponent]
})
export class CheckboxFilterModule { }
