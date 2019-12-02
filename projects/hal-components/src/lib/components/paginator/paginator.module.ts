import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule
  ],
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent]
})
export class PaginatorModule { }
