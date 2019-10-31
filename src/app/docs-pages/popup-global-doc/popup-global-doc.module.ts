import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupGlobalDocComponent } from './popup-global-doc.component';
import { DocImportLineModule } from 'src/app/shared/doc-import-line/doc-import-line.module';
import { CodeHighlighterModule } from 'src/app/shared/code-highlighter/code-highlighter.module';
import { DocListModule } from 'src/app/shared/doc-list/doc-list.module';
import { PopupGlobalExampleComponent } from './popup-global-example/popup-global-example.component';
import { PopupGlobalService } from 'hal-components';

@NgModule({
  imports: [
    CommonModule,
    DocImportLineModule,
    CodeHighlighterModule,
    DocListModule
  ],
  declarations: [
    PopupGlobalDocComponent,
    PopupGlobalExampleComponent,
  ],
  providers: [
    PopupGlobalService
  ],
  bootstrap: [PopupGlobalExampleComponent],
  exports: [PopupGlobalDocComponent]
})
export class PopupGlobalDocModule { }
