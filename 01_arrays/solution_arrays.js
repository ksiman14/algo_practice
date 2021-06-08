// twoSum
const twoSum = (arr, target) => {
  const differences = {};
  const pair = [];

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];
    if (differences[arr[i]]) {
      pair.push(arr[i], diff);
      return pair;
    }
    differences[diff] = true;
  }

  return pair;
};
