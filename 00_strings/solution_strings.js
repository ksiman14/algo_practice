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
