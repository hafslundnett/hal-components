import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { HighlightAutocomplete } from './highlight-autocomplete.pipe';

@NgModule({
   imports: [
      CommonModule
   ],
   declarations: [
      AutocompleteComponent,
      HighlightAutocomplete
   ],
   exports: [
      AutocompleteComponent
   ]
})
export class AutocompleteModule { }
