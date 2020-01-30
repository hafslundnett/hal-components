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
        /*
            On match on first letter or substring, take out match and return.
            else, return nothing.
        */

        if (InputOption.toLowerCase().includes(searchText.toLowerCase())) {

            const matchIndex = InputOption.toLowerCase().search(searchText.toLowerCase());
            console.log(matchIndex);
            const result = InputOption.substring(matchIndex, searchText.length);

            console.log(result);
            if (result.toLowerCase() === searchText.toLowerCase()) {
            }
            return result;

            // console.log(searchText);
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
