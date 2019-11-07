import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolToText'
})
export class BoolToTextPipe implements PipeTransform {
  transform(bool: boolean): string {
    return bool ? 'Ja' : 'Nei';
  }
}
