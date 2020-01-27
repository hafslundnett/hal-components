import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SelectorModule } from '../selector/selector.module';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    SelectorModule
  ],
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent]
})
export class PaginatorModule { }
