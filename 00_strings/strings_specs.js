describe('isUnique', () => {
  it('returns true for strings with all unique characters', () => {
    expect(isUnique('abc de')).toBe(true);
  });

  it('returns false for strings with non-unique characters', () => {
    expect(isUnique('aacc is not unique')).toBe(false);
  });

  it('returns true for an empty string', () => {
    expect(isUnique('')).toBe(true);
  });

  it('works for strings with upper and lower case characters', () => {
    expect(isUnique('heLlo')).toBe(false);
    expect(isUnique('aBcDe')).toBe(true);
  });
});

describe('isPermutation', () => {
  it('returns true if the strings are permutations', () => {
    expect(isPermutation('abc', 'cba')).toBe(true);

    expect(isPermutation('hello world', 'dlrow olleh')).toBe(true);
  });

  it('returns false if the strings are not permutations', () => {
    expect(isPermutation('hello world', 'world lehl')).toBe(false);
  });

  it('is case sensitive', () => {
    expect(isPermutation('HeLlo', 'hello')).toBe(false);

    expect(isPermutation('WoRlD', 'oWRDl')).toBe(true);
  });

  it('returns false if exactly one string is empty', () => {
    expect(isPermutation('hello world', '')).toBe(false);
  });

  it('returns true if both strings are empty', () => {
    expect(isPermutation('', '')).toBe(true);
  });
});
