import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { DocListModule } from '../shared/doc-list/doc-list.module';
import { SpinnerModule } from '../shared/spinner/spinner.module';
import { CodeHighlighterModule } from '../shared/code-highlighter/code-highlighter.module';

@NgModule({
  imports: [
    CommonModule,
    DocListModule,
    SpinnerModule,
    CodeHighlighterModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
