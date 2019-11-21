import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardShortcutsDocComponent } from './keyboard-shortcuts-doc.component';
import { DocImportLineModule } from 'src/app/shared/doc-import-line/doc-import-line.module';
import { DocApiTableModule } from 'src/app/shared/doc-api-table/doc-api-table.module';
import { DocListModule } from 'src/app/shared/doc-list/doc-list.module';
import { CodeHighlighterModule } from 'src/app/shared/code-highlighter/code-highlighter.module';
import { KeyboardShortcutsPopupModule } from '@hafslundnett/hal-components';

@NgModule({
  imports: [
    CommonModule,
    CodeHighlighterModule,
    DocListModule,
    DocApiTableModule,
    DocImportLineModule,
    KeyboardShortcutsPopupModule
  ],
  declarations: [KeyboardShortcutsDocComponent]
})
export class KeyboardShortcutsDocModule { }
