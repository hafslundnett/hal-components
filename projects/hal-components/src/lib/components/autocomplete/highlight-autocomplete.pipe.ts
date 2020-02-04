import { Pipe, PipeTransform } from '@angular/core';
import { AutocompleteItem } from './autocomplete-item.interface';

@Pipe({
    name: 'highlightAutocomplete'
})
export class HighlightAutocomplete implements PipeTransform {

    transform(label: AutocompleteItem['label'], searchText: string) {
        if (!searchText) {
            return label;
        }
        const regex = new RegExp(searchText, 'gi');

        const replaced = label.replace(regex, (match) => {
            return '<b>' + match + '</b>';
        });
        return replaced;
    }
}
