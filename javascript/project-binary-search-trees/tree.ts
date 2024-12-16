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
  root: TreeNode | null;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insertNode(rootNode: TreeNode, newNode: TreeNode) {
    if (newNode.data < rootNode.data) {
      rootNode.left = newNode;
    }
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value: number) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
}

const bst = new Tree();
console.log("Tree empty?", bst.isEmpty());

// TODO: Sort & Remove duplicated
// TODO: insert(value) & delete(value) func using tree traversal
// TODO: find(value)
// TODO: levelOrder(callback) func => traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as argument, similarly to how Array.prototype.forEach might work for arrays.
