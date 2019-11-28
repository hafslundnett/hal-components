import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { SelectorComponent } from './selector.component';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule
  ],
  declarations: [SelectorComponent],
  exports: [SelectorComponent]
})
export class SelectorModule { }
