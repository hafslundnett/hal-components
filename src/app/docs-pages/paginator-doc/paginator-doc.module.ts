import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorDocComponent } from './paginator-doc.component';
import { DividerModule } from '@hafslundnett/hal-components';
import { CodeHighlighterModule } from 'src/app/shared/code-highlighter/code-highlighter.module';
import { DocListModule } from 'src/app/shared/doc-list/doc-list.module';
import { DocApiTableModule } from 'src/app/shared/doc-api-table/doc-api-table.module';
import { DocImportLineModule } from 'src/app/shared/doc-import-line/doc-import-line.module';

@NgModule({
  imports: [
    CommonModule,
    DividerModule,
    CodeHighlighterModule,
    DocListModule,
    DocApiTableModule,
    DocImportLineModule
  ],
  declarations: [PaginatorDocComponent],
  exports: [PaginatorDocComponent]
})
export class PaginatorDocModule { }
