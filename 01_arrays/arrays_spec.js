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

describe('Binary Search', () => {
  it('returns the index of the target if it is included in the array', () => {
    expect(binarySearch([1, 5, 9, 22, 37, 98, 102], 9)).toBe(2);
  });

  it('returns -1 if the target is not included in the array', () => {
    expect(binarySearch([1, 5, 9, 22, 37, 98, 102]), 12).toBe(-1);
  });

  it('returns -1 if the array is empty', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });
});

describe('Rotate Matrix', () => {
  const myMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const anotherMatrix = [
    [4, 8, 12, 16],
    [3, 7, 11, 15],
    [2, 6, 10, 14],
    [1, 5, 9, 13],
  ];

  it('rotates the given matrix 90 degrees', () => {
    expect(rotateMatrix(myMatrix)).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);

    expect(rotateMatrix(anotherMatrix)).toEqual([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ]);

    expect(
      rotateMatrix([
        [1, 0],
        [0, 1],
      ])
    ).toEqual([
      [0, 1],
      [1, 0],
    ]);
  });

  it('returns an empty matrix when the given matrix is empty', () => {
    expect(rotateMatrix([])).toEqual([]);
  });
});
