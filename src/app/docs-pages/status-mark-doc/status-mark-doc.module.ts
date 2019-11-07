import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusMarkDocComponent } from './status-mark-doc.component';
import { DocImportLineModule } from 'src/app/shared/doc-import-line/doc-import-line.module';
import { CodeHighlighterModule } from 'src/app/shared/code-highlighter/code-highlighter.module';
import { DocListModule } from 'src/app/shared/doc-list/doc-list.module';
import { DocApiTableModule } from 'src/app/shared/doc-api-table/doc-api-table.module';
import { StatusMarkModule } from 'hal-components';

@NgModule({
  imports: [
    CommonModule,
    DocImportLineModule,
    CodeHighlighterModule,
    DocListModule,
    DocApiTableModule,
    StatusMarkModule
  ],
  declarations: [StatusMarkDocComponent],
  exports: [StatusMarkDocComponent],
})
export class StatusMarkDocModule { }
