import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { HighlightLetters } from './higlight-letter.pipe';
import { HighlightRestLetters } from './highlight-rest.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AutocompleteComponent, HighlightLetters, HighlightRestLetters],
  exports: [AutocompleteComponent]
})
export class AutocompleteModule { }
