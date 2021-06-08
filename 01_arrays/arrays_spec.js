describe('Two Sum', () => {
  it('returns false if no numbers in the array add up to the target', () => {
    expect(twoSum([1, 3, 5, 7], 7)).toEqual([]);
  });

  it('returns the pair in an array if the pair adds up to the target', () => {
    const result = twoSum([2, 4, 6, 8], 6);
    result.sort();

    expect(result).toEqual([2, 4]);
  });

  it('works for both positive and negative integers', () => {
    const result = twoSum([-1, 8, -3, 0], -3);
    result.sort();

    expect(result).toEqual([-3, 0]);

    const result2 = twoSum([-7, 14, 6, -9], 5);
    result2.sort();

    expect(result2).toEqual([-9, 14]);
  });
});
