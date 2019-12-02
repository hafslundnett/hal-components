import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule
  ],
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent]
})
export class PaginatorModule { }
