import { BoolToTextPipe } from './bool-to-text.pipe';

describe('BoolToText', () => {
  const pipe = new BoolToTextPipe();

  describe('When a positive input is provided', () => {
    let response: string;

    beforeEach(() => {
      response = pipe.transform(true);
    });

    it('a norwegian text is returned', () => {
      expect(response).toBe('Ja');
    });
  });

  describe('When a negative input is provided', () => {
    let response: string;

    beforeEach(() => {
      response = pipe.transform(false);
    });

    it('a norwegian text is returned', () => {
      expect(response).toBe('Nei');
    });
  });
});
