import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { HighlightLetters } from './highlight-letters.pipe';
import { FilterFirst } from './filter-first.pipe';
import { FilterLast } from './filter-last.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AutocompleteComponent, HighlightLetters, FilterFirst, FilterLast],
  exports: [AutocompleteComponent]
})
export class AutocompleteModule { }
