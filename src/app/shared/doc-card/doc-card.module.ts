import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCardComponent } from './doc-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DocCardComponent],
  exports: [
    DocCardComponent
  ]
})
export class DocCardModule { }
