import { Pipe, PipeTransform } from '@angular/core';
import { AutocompleteItem } from './autocomplete-item.interface';

@Pipe({
    name: 'filterLast'
})
export class FilterLast implements PipeTransform {

    transform(InputOption: AutocompleteItem['label'], searchText: string) {

        if (!searchText) {
            return;
        }

        // if match on searchtext. Tak the first match, slice the first part and return
        // everything after the match.

        if (InputOption.toLowerCase().includes(searchText.toLowerCase())) {

            const matchIndex = InputOption.toLowerCase().search(searchText.toLowerCase());
            console.log(matchIndex);
            const result = InputOption.substring(matchIndex + searchText.length);

            console.log(result);
            if (result.toLowerCase() === searchText.toLowerCase()) {
            }
            return result;

            // console.log(searchText);
        }
    }
}
