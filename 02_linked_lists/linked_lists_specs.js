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

describe('Delete Node', () => {
  const list1 = new LinkedList(1);
  list1.next = new LinkedList(2);
  list1.next.next = new LinkedList(3);
  list1.next.next.next = new LinkedList(4);

  const list2 = new LinkedList(1);
  list2.next = new LinkedList(2);
  list2.next.next = new LinkedList(4);

  it('removes the given node from the linked list', () => {
    deleteNode(list1.next.next);
    expect(list1).toBe(list1);
    expect(list1).toEqual(list2);
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

describe('Is Palindrome', () => {
  const list1 = new LinkedList(3);
  list1.next = new LinkedList(3);

  const list2 = new LinkedList(5);
  list2.next = new LinkedList(7);
  list2.next.next = new LinkedList(-1);
  list2.next.next.next = new LinkedList(7);
  list2.next.next.next.next = new LinkedList(5);

  const list3 = new LinkedList(-2);
  list3.next = new LinkedList(-1);
  list3.next.next = new LinkedList(0);

  it('returns true if the list is a palindrome', () => {
    expect(isPalindrome(list1)).toBe(true);
    expect(isPalindrome(list2)).toBe(true);
  });

  it('returns false if the list is not a palindrome', () => {
    expect(isPalindrome(list3)).toBe(false);
  });
});
