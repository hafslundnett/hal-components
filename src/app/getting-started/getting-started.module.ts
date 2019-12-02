import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GettingStartedComponent } from './getting-started.component';
import { DocListModule } from '../shared/doc-list/doc-list.module';
import { SpinnerModule } from '../shared/spinner/spinner.module';
import { CodeHighlighterModule } from 'src/app/shared/code-highlighter/code-highlighter.module';
import { DocImportLineModule } from 'src/app/shared/doc-import-line/doc-import-line.module';
import { DocApiTableModule } from 'src/app/shared/doc-api-table/doc-api-table.module';

@NgModule({
  imports: [
    CommonModule,
    DocListModule,
    SpinnerModule,
    CodeHighlighterModule,
    DocImportLineModule,
    DocApiTableModule,
  ],
  declarations: [GettingStartedComponent],
  exports: [GettingStartedComponent]
})
export class GettingStartedModule { }
