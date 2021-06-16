// nthFibonacci
const nthFibonacci = (n) => {
  if (n <= 1) return 0;

  let prev = 0;
  let current = 1;
  let i = 2;

  while (i < n) {
    const sum = current + prev;
    prev = current;
    current = sum;
    i++;
  }

  return current;
};
