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
