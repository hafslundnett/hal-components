import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDocComponent } from './svg-doc.component';
import { DocImportLineModule } from 'src/app/shared/doc-import-line/doc-import-line.module';
import { SvgElementModule } from 'hal-components';
import { CodeHighlighterModule } from 'src/app/shared/code-highlighter/code-highlighter.module';
import { DocListModule } from 'src/app/shared/doc-list/doc-list.module';

@NgModule({
  imports: [
    CommonModule,
    DocImportLineModule,
    SvgElementModule,
    CodeHighlighterModule,
    DocListModule
  ],
  declarations: [SvgDocComponent],
  exports: [SvgDocComponent]
})
export class SvgDocModule { }
