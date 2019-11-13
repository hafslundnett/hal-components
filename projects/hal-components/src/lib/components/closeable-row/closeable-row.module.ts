import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { CloseableRowComponent } from './closeable-row.component';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  declarations: [CloseableRowComponent],
  exports: [CloseableRowComponent]

})
export class CloseableRowModule { }
