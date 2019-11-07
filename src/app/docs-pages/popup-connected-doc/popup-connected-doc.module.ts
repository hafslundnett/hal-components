import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupConnectedDocComponent } from './popup-connected-doc.component';
import { DocApiTableModule } from 'src/app/shared/doc-api-table/doc-api-table.module';
import { DocListModule } from 'src/app/shared/doc-list/doc-list.module';
import { CodeHighlighterModule } from 'src/app/shared/code-highlighter/code-highlighter.module';
import { DocImportLineModule } from 'src/app/shared/doc-import-line/doc-import-line.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { PopupConnectedModule } from 'hal-components';
import { PopupConnectedExampleComponent } from './popup-connected-example/popup-connected-example.component';

@NgModule({
  imports: [
    CommonModule,
    DocImportLineModule,
    CodeHighlighterModule,
    DocListModule,
    DocApiTableModule,
    OverlayModule,
    PopupConnectedModule
  ],
  declarations: [
    PopupConnectedDocComponent,
    PopupConnectedExampleComponent,
  ]
})
export class PopupConnectedDocModule { }
