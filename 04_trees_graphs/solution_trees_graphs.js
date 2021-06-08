// Depth First Search
// Only edit the depthFirstSearch method in the below class

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
    return this;
  }

  depthFirstSearch(arr) {
    const queue = [this];

    while (queue.length) {
      const first = queue.shift();
      if (!first.children) continue;
      queue.unshift(...first.children);
      arr.push(first.value);
    }

    return arr;
  }
}
