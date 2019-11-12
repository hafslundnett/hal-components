import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackDocComponent } from './feedback-doc.component';
import { DocApiTableModule } from 'src/app/shared/doc-api-table/doc-api-table.module';
import { DocListModule } from 'src/app/shared/doc-list/doc-list.module';
import { CodeHighlighterModule } from 'src/app/shared/code-highlighter/code-highlighter.module';
import { DocImportLineModule } from 'src/app/shared/doc-import-line/doc-import-line.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { FeedbackModule } from '@hafslundnett/hal-components';
import { FeedbackService } from '@hafslundnett/hal-components';

@NgModule({
  imports: [
    CommonModule,
    DocApiTableModule,
    DocListModule,
    CodeHighlighterModule,
    DocImportLineModule,
    OverlayModule,
    FeedbackModule
  ],
  declarations: [FeedbackDocComponent],
  providers: [
    FeedbackService
  ],
  exports: [FeedbackDocComponent]
})
export class FeedbackDocModule { }
