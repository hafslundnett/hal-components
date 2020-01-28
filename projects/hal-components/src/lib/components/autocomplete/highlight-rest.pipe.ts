import { Pipe, PipeTransform } from '@angular/core';
import { AutocompleteItem } from './autocomplete-item.interface';

@Pipe({
    name: 'highlightRestLetters'
})
export class HighlightRestLetters implements PipeTransform {

    transform(InputOption: AutocompleteItem['label'], searchText: string) {

        if (!searchText) {
            return InputOption;
        }
        for (const letter of InputOption.toLowerCase()) {
            for (const searchletter of searchText.toLowerCase()) {
                if (letter === searchletter) {
                    const match = InputOption.slice(searchText.length);
                    return match;
                }
            }
        }
    }
}
