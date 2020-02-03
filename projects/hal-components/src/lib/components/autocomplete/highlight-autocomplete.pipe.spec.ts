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
    expect(result).toBe('<b>Elv</b>ia');
  });

  it('returns option without any highlight when searchterm does not match', () => {
    const option = 'Elvia';
    const searchTerm = 'elvis';
    const pipe = new HighlightAutocomplete();
    const result = pipe.transform(option, searchTerm);
    expect(result).toBe('Elvia');
  });

  it('returns all matching inputs with bold tags when search term is matching multiple values in array', () => {
    const options = ['Elvia', 'Elvis', 'Elves'];
    const pipe = new HighlightAutocomplete();
    const searchTerm = 'elv';
    const results: string[] = [];
    for (const option of options) {
      const result = pipe.transform(option, searchTerm);
      results.push(result);
    }
    expect(results).toEqual(['<b>Elv</b>ia', '<b>Elv</b>is', '<b>Elv</b>es']);
  });

  it('Only return matching options with bold tags, and non matching options without bold tags', () => {
    const options = ['Elvia', 'Elvis', 'Elves'];
    const pipe = new HighlightAutocomplete();
    const searchTerm = 'elvi';
    const results: string[] = [];
    for (const option of options) {
      const result = pipe.transform(option, searchTerm);
      results.push(result);
    }
    expect(results).toEqual(['<b>Elvi</b>a', '<b>Elvi</b>s', 'Elves']);
  });
});
