import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocApiTableComponent } from './doc-api-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DocApiTableComponent
  ],
  exports: [
    DocApiTableComponent
  ]
})
export class DocApiTableModule { }
