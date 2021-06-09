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

// binarySearch

const binarySearch = (arr, target, start = 0) => {
  if (arr.length < 1) return -1;

  const mid = Math.floor(arr.length / 2);

  if (arr[mid] === target) return start + mid;

  if (arr[mid] > target) {
    return binarySearch(arr.slice(0, mid), target, start);
  } else {
    return binarySearch(arr.slice(mid + 1), target, start + mid + 1);
  }
};

//Rotate Matrix
const rotateMatrix = (matrix) => {
  // original column index becomes row
  // original row index reversed becomes column
  const rotated = [];

  for (let i = 0; i < matrix.length; i++) {
    // column index using to create row
    const row = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      // row index used to push to column in order
      row.push(matrix[j][i]);
    }
    rotated.push(row);
  }

  return rotated;
};
