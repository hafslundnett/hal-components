import { Pipe, PipeTransform } from '@angular/core';
import { AutocompleteItem } from './autocomplete-item.interface';

@Pipe({
    name: 'filterFirst'
})
export class FilterFirst implements PipeTransform {

    transform(InputOption: AutocompleteItem['label'], searchText: string) {

        if (!searchText) {
            return InputOption;
        }

        if (InputOption.toLowerCase().includes(searchText.toLowerCase())) {

            const matchIndex = InputOption.toLowerCase().search(searchText.toLowerCase());
            console.log(matchIndex);
            if (matchIndex === 0) {
                return;
            }
            const result = InputOption.substring(0, matchIndex);

            console.log(result);
            if (result.toLowerCase() === searchText.toLowerCase()) {
            }
            return result;

            // console.log(searchText);
        }

        /*If match, slicke the word from before the match and return the string.
        On first letter match, return nothing. */
    }
}
