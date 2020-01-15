import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatDocComponent } from './date-format-doc.component';
import { CodeHighlighterModule } from 'src/app/shared/code-highlighter/code-highlighter.module';
import { DocListModule } from 'src/app/shared/doc-list/doc-list.module';
import { DocImportLineModule } from 'src/app/shared/doc-import-line/doc-import-line.module';
import { DocApiTableModule } from 'src/app/shared/doc-api-table/doc-api-table.module';
import { DividerModule } from '@hafslundnett/hal-components';

@NgModule({
  imports: [
    CommonModule,
    CodeHighlighterModule,
    DocListModule,
    DocImportLineModule,
    DocApiTableModule,
    DividerModule
  ],
  declarations: [DateFormatDocComponent]
})
export class DateFormatDocModule { }
