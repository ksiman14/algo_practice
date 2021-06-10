class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new LinkedList(1);
head.next = new LinkedList(1);
head.next.next = new LinkedList(2);
head.next.next.next = new LinkedList(5);
head.next.next.next.next = new LinkedList(5);
head.next.next.next.next.next = new LinkedList(10);
head.next.next.next.next.next.next = new LinkedList(21);
head.next.next.next.next.next.next.next = new LinkedList(21);

const target = new LinkedList(1);
target.next = new LinkedList(2);
target.next.next = new LinkedList(5);
target.next.next.next = new LinkedList(10);
target.next.next.next.next = new LinkedList(21);

describe('Remove duplicates', () => {
  it('modifies the linked list in place', () => {
    expect(removeDuplicates(head)).toBe(head);
  });

  it('removes nodes with duplicate values from the linked list', () => {
    expect(removeDuplicates(head)).toEqual(target);
  });
});

describe('Return Nth to Last', () => {
  it('finds the nth to last element of a singly linked list', () => {
    expect(nthToLast(target, 4)).toBe(target.next);
    expect(nthToLast(target, 2)).toBe(target.next.next.next);
  });

  it('returns null if n is greater than the length of the linked list', () => {
    expect(nthToLast(target, 6)).toEqual(null);
  });
});
