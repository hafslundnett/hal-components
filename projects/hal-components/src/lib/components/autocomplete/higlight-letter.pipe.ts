import { Pipe, PipeTransform } from '@angular/core';
import { AutocompleteItem } from './autocomplete-item.interface';

@Pipe({
    name: 'highlightLetters'
})
export class HighlightLetters implements PipeTransform {

    transform(InputOption: AutocompleteItem['label'], searchText: string) {

        if (!searchText) {
            return;
        }

        // if (InputOption.includes(searchText)) {
        //     const boldText = InputOption.slice(0, searchText.length);
        //     return boldText;
        // }

        // for (const letter of InputOption.toLowerCase()) {
        //     for (const searchletter of searchText.toLowerCase()) {
        //         if (letter === searchletter) {
        //             const match = searchText;
        //             return match;
        //         }
        //     }
        // }
    }
}
