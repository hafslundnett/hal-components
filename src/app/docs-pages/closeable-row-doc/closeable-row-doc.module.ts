import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseableRowDocComponent } from './closeable-row-doc.component';
import { CloseableRowModule } from '@hafslundnett/hal-components';
import { DocImportLineModule } from 'src/app/shared/doc-import-line/doc-import-line.module';
import { CodeHighlighterModule } from 'src/app/shared/code-highlighter/code-highlighter.module';
import { DocListModule } from 'src/app/shared/doc-list/doc-list.module';
import { DocApiTableModule } from 'src/app/shared/doc-api-table/doc-api-table.module';

@NgModule({
  imports: [
    CommonModule,
    CloseableRowModule,
    DocImportLineModule,
    CodeHighlighterModule,
    DocListModule,
    DocApiTableModule
  ],
  declarations: [CloseableRowDocComponent]
})
export class CloseablerowdocModule { }
