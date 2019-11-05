import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocListComponent } from './doc-list.component';
import { DocCardModule } from '../doc-card/doc-card.module';
import { DividerModule } from 'hal-components';


@NgModule({
  imports: [
    CommonModule,
    DocCardModule,
    DividerModule
  ],
  declarations: [DocListComponent],
  exports: [DocListComponent]
})
export class DocListModule { }
