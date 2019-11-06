import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ClosableRowComponent } from './closable-row.component';


@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  declarations: [ClosableRowComponent],
  exports: [ClosableRowComponent]

})
export class ClosableRowModule { }
