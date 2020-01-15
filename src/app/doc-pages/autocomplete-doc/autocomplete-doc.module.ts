import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteDocComponent } from './autocomplete-doc.component';
import { CodeHighlighterModule } from 'src/app/shared/code-highlighter/code-highlighter.module';
import { DocListModule } from 'src/app/shared/doc-list/doc-list.module';
import { DocApiTableModule } from 'src/app/shared/doc-api-table/doc-api-table.module';
import { DocImportLineModule } from 'src/app/shared/doc-import-line/doc-import-line.module';
import { AutocompleteModule } from '@hafslundnett/hal-components';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CodeHighlighterModule,
    DocListModule,
    DocApiTableModule,
    DocImportLineModule,
    AutocompleteModule,
    FormsModule
  ],
  declarations: [AutocompleteDocComponent]
})
export class AutocompleteDocModule { }
