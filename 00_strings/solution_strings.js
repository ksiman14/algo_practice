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
  if (str1.length - 1 > str2.length || str2.length - 1 > str1.length)
    return false;

  let edits = false;
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < str1.length && idx2 < str2.length) {
    if (str1[idx1] === str2[idx2]) {
      idx1++;
      idx2++;
    } else {
      if (edits) return false;
      edits = true;
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

  return true;
};

// String Shrink

const strShrink = (str) => {
  let shrunkStr = [];
  let idx = 0;

  while (idx < str.length) {
    let counter = 1;

    while (idx + counter < str.length) {
      if (str[idx] === str[idx + counter]) {
        counter++;
      } else {
        break;
      }
    }

    shrunkStr.push(`${str[idx]}${counter}`);
    idx = idx + counter;
  }

  return str.length <= shrunkStr.length * 2 ? str : shrunkStr.join('');
};

// String Rotation
const isRotation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  if (str1 === str2) return true;

  let idx1 = 0;
  let idx2 = 0;
  const offsets = [];

  while (idx2 < str2.length) {
    if (str1[idx1].toLowerCase() === str2[idx2].toLowerCase()) {
      offsets.push(idx2 - idx1);
    }
    idx2++;
  }

  while (offsets.length) {
    const offset = offsets.shift();
    for (let i = 0; i < str1.length; i++) {
      if (i + offset >= str1.length) {
        if (
          str1[i].toLowerCase() !==
          str2[i - (str1.length - offset)].toLowerCase()
        ) {
          if (offsets.length < 1) return false;
          break;
        }
      } else {
        if (str1[i].toLowerCase() !== str2[i + offset].toLowerCase()) {
          if (offsets.length < 1) return false;
          break;
        }
      }
    }
  }

  return true;
};
