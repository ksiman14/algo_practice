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
