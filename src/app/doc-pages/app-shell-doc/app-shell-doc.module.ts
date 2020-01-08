import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellDocComponent } from './app-shell-doc.component';
import { DocImportLineModule } from 'src/app/shared/doc-import-line/doc-import-line.module';
import { CodeHighlighterModule } from 'src/app/shared/code-highlighter/code-highlighter.module';
import { DocListModule } from 'src/app/shared/doc-list/doc-list.module';
import { DocApiTableModule } from 'src/app/shared/doc-api-table/doc-api-table.module';

@NgModule({
  imports: [
    CommonModule,
    DocImportLineModule,
    CodeHighlighterModule,
    DocListModule,
    DocApiTableModule
  ],
  declarations: [AppShellDocComponent],
  exports: [AppShellDocComponent]
})
export class AppShellDocModule { }
