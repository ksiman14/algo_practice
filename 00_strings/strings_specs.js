describe('Strings', () => {
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

  describe('Palindrome Permutation', () => {
    it('returns true when the input is a permutation of a palindrome', () => {
      expect(palindromePerm('nana')).toBe(true);
    });

    it('returns false when the input is not a permutation of a palindrome', () => {
      expect(palindromePerm('hello world')).toBe(false);
    });

    it('ignores spaces', () => {
      expect(palindromePerm('was it a car or a cat I saw')).toBe(true);
    });

    it('returns true for an empty or single-character string', () => {
      expect(palindromePerm('')).toBe(true);
      expect(palindromePerm('P')).toBe(true);
    });
  });

  describe('One Edit', () => {
    it('returns true if one character has been inserted', () => {
      expect(oneEdit('play', 'plays')).toBe(true);
    });

    it('returns true if one character has been removed', () => {
      expect(oneEdit('breach', 'beach')).toBe(true);
    });

    it('returns true if one character has been replaced', () => {
      expect(oneEdit('bay', 'pay')).toBe(true);
    });

    it('returns false if more than one edit has been made', () => {
      expect(oneEdit('boy', 'girl')).toBe(false);
      expect(oneEdit('breach', 'bach')).toBe(false);
      expect(oneEdit('bay', 'pray')).toBe(false);
      expect(oneEdit('bay', 'bayou')).toBe(false);
    });
  });

  describe('String Shrink', () => {
    it('returns a compressed string when the compression is shorter than the original', () => {
      expect(strShrink('ooooops')).toBe('o5p1s1');
      expect(strShrink('oooohnoooo')).toBe('o4h1n1o4');
      expect(strShrink('aaabcccdd')).toBe('a3b1c3d2');
    });

    it('returns the original string when the compressed string is longer', () => {
      expect(strShrink('pools')).toBe('pools');
      expect(strShrink('hello')).toBe('hello');
    });
  });

  describe('String Rotation', () => {
    it('returns true if the second string is a rotation of the first', () => {
      expect(isRotation('smoothie', 'othiesmo')).toBe(true);
      expect(isRotation('pencil', 'pencil')).toBe(true);
    });

    it('returns false if the second string is not a rotation of the first', () => {
      expect(isRotation('soap', 'posa')).toBe(false);
      expect(isRotation('towel', 'weltso')).toBe(false);
    });

    it('is not case sensitive', () => {
      expect(isRotation('sMOothiE', 'othiesmo')).toBe(true);
    });

    it('returns true if both strings are empty', () => {
      expect(isRotation('', '')).toBe(true);
    });

    it('returns false if just one string is empty', () => {
      expect(isRotation('hello', '')).toBe(false);
      expect(isRotation('', 'hello')).toBe(false);
    });
  });
});
