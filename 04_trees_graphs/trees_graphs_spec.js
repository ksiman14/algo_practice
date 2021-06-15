describe('Trees & Graphs', () => {
  describe('Depth First Search', () => {
    const start = new Node('A');
    const B = new Node('B');
    const C = new Node('C');
    const D = new Node('D');
    const E = new Node('E');
    const F = new Node('F');
    const G = new Node('G');
    const H = new Node('H');
    const I = new Node('I');
    const J = new Node('J');
    const K = new Node('K');

    it("returns the tree's values in depth-first order", () => {
      start.addChild(B).addChild(C).addChild(D);
      B.addChild(E).addChild(F);
      D.addChild(G).addChild(H);
      F.addChild(I).addChild(J);
      G.addChild(K);

      expect(start.depthFirstSearch([])).toEqual([
        'A',
        'B',
        'E',
        'F',
        'I',
        'J',
        'C',
        'D',
        'G',
        'K',
        'H',
      ]);
    });
  });
});
