import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocListComponent } from './doc-list.component';
import { DocCardModule } from '../doc-card/doc-card.module';

@NgModule({
  imports: [
    CommonModule,
    DocCardModule
  ],
  declarations: [DocListComponent],
  exports: [DocListComponent]
})
export class DocListModule { }
