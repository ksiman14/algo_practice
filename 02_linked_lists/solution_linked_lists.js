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

// Delete node

const deleteNode = (node) => {
  node.value = node.next.value;
  node.next = node.next.next;
};

// Nth to Last

const nthToLast = (head, n) => {
  let current = head;
  let nth = null;
  let i = 0;

  while (current) {
    if (i - n === -1) {
      nth = head;
    } else if (i - n > -1) {
      nth = nth.next;
    }

    current = current.next;
    i++;
  }

  return nth;
};

// is Palindrome
const isPalindrome = (head) => {
  let runner = head;
  const values = [];

  while (runner) {
    values.push(runner.value);
    runner = runner.next;
  }

  runner = head;

  while (values.length) {
    const last = values.pop();
    if (runner.value !== last) return false;
    runner = runner.next;
  }

  return true;
};
