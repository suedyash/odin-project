class TreeNode {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(arr: number[]) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr: number[]) {}
}

// TODO: Sort & Remove duplicated
// TODO: insert(value) & delete(value) func using tree traversal
// TODO: find(value)
// TODO: levelOrder(callback) func => traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as argument, similarly to how Array.prototype.forEach might work for arrays.
