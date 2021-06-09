// isUnique
const isUnique = (str) => {
  const chars = {};

  for (let i = 0; i < str.length; i++) {
    const current = str[i].toLowerCase();
    if (chars[current]) return false;
    chars[current] = true;
  }

  return true;
};

// isPermutation
const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const chars = {};

  for (let i = 0; i < str1.length; i++) {
    const current1 = str1[i];
    if (!chars[current1]) {
      chars[current1] = 1;
    } else {
      chars[current1]++;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    const current2 = str2[j];
    if (!chars[current2]) return false;
    chars[current2]--;
    if (chars[current2] === 0) delete chars[current2];
  }

  return true;
};

//Palindrome Permutation
const palindromePerm = (str) => {
  const chars = {};

  let unevens = 0;

  for (let i = 0; i < str.length; i++) {
    const current = str[i].toLowerCase();

    if (current && chars[current]) {
      chars[current]++;
      if (chars[current] % 2 === 0) {
        unevens--;
      } else {
        unevens++;
      }
    } else if (current) {
      chars[current] = 1;
      unevens++;
    }
  }

  return unevens <= 1;
};

//One Edit
const oneEdit = (str1, str2) => {
  let edits = 0;
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < str1.length && idx2 < str2.length) {
    if (str1[idx1] === str2[idx2]) {
      idx1++;
      idx2++;
    } else {
      edits++;
      if (str1[idx1 + 1] === str2[idx2]) {
        idx1++;
      } else if (str1[idx1] === str2[idx2 + 1]) {
        idx2++;
      } else {
        idx1++;
        idx2++;
      }
    }
  }

  return edits <= 1;
};
