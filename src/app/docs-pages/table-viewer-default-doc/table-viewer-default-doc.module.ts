import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocImportLineModule } from 'src/app/shared/doc-import-line/doc-import-line.module';
import { CodeHighlighterModule } from 'src/app/shared/code-highlighter/code-highlighter.module';
import { DocListModule } from 'src/app/shared/doc-list/doc-list.module';
import { DocApiTableModule } from 'src/app/shared/doc-api-table/doc-api-table.module';
import { TableViewerDefaultDocComponent } from './table-viewer-default-doc.component';
import { TableViewerDefaultModule } from '@hafslundnett/hal-components';

@NgModule({
  imports: [
    CommonModule,
    DocImportLineModule,
    CodeHighlighterModule,
    DocListModule,
    DocApiTableModule,
    TableViewerDefaultModule
  ],
  declarations: [TableViewerDefaultDocComponent],
  exports: [TableViewerDefaultDocComponent]
})
export class TableViewerDefaultDocModule { }
