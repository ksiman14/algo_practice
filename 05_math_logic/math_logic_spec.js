describe('Nth Fibonacci', () => {
  it('returns 0 for any n less than or equal to 1', () => {
    expect(nthFibonacci(-5)).toBe(0);
    expect(nthFibonacci(0)).toBe(0);
    expect(nthFibonacci(1)).toBe(0);
  });

  it('returns the nth Fibonacci number for any n greater than or equal to 1', () => {
    expect(nthFibonacci(4)).toBe(2);
    expect(nthFibonacci(5)).toBe(3);
    expect(nthFibonacci(9)).toBe(21);
  });
});
