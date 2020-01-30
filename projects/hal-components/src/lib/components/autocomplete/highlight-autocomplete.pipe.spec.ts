import { HighlightAutocomplete } from './highlight-autocomplete.pipe';

describe('Pipe: HighlightAutocomplete1e', () => {
  it('create an instance', () => {
    const pipe = new HighlightAutocomplete();
    expect(pipe).toBeTruthy();
  });

  it('returns option with matching search term in bold', () => {
    const option = 'Elvia';
    const searchTerm = 'elv';
    const pipe = new HighlightAutocomplete();
    const result = pipe.transform(option, searchTerm);
    console.log(result);
    expect(result).toBe('<b>Elv</b>ia');
  });
});
