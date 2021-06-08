class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

describe('Remove duplicates', () => {
  const head = new LinkedList(1);
  head.next = new LinkedList(1);
  head.next.next = new LinkedList(2);
  head.next.next.next = new LinkedList(5);
  head.next.next.next.next = new LinkedList(5);
  head.next.next.next.next.next = new LinkedList(10);
  head.next.next.next.next.next.next = new LinkedList(21);
  head.next.next.next.next.next.next.next = new LinkedList(21);

  it('modifies the linked list in place', () => {
    expect(removeDuplicates(head)).toBe(head);
  });

  it('removes nodes with duplicate values from the linked list', () => {
    const target = new LinkedList(1);
    target.next = new LinkedList(2);
    target.next.next = new LinkedList(5);
    target.next.next.next = new LinkedList(10);
    target.next.next.next.next = new LinkedList(21);

    expect(removeDuplicates(head)).toEqual(target);
  });
});
