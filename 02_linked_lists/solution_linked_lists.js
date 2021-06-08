// removeDuplicates

const removeDuplicates = (head) => {
  let current = head;

  while (current !== null) {
    let nextNode = current.next;

    while (nextNode !== null && current.value === nextNode.value) {
      nextNode = nextNode.next;
    }

    current.next = nextNode;
    current = nextNode;
  }

  return head;
};
