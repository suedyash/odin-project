export class TreeNode {
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

  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insertNode(root: TreeNode, newNode: TreeNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  insert(value: number) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertArr(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      this.insert(value);
    }
  }

  min(root: TreeNode | null): number | null {
    if (root === null) {
      return null;
    }
    if (!root.left) {
      return root.data;
    } else {
      return this.min(root.left);
    }
  }

  max(root: TreeNode | null): number | null {
    if (root === null) {
      return null;
    }
    if (!root.right) {
      return root.data;
    } else {
      return this.max(root.right);
    }
  }

  deleteNode(root: TreeNode | null, value: number): TreeNode | null {
    if (root === null) {
      return root;
    }
    if (value < root.data) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.data) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      }
      if (!root.right) {
        return root.left;
      }
      const minRight = this.min(root.right);
      if (minRight === null) {
        throw new Error("Unexpected null value returned by min method.");
      }
      root.data = minRight;
      root.right = this.deleteNode(root.right, root.data);
    }
    return root;
  }

  delete(value: number) {
    this.root = this.deleteNode(this.root, value);
  }

  search(root: TreeNode | null, value: number): boolean {
    if (!root) {
      console.log(`${value} present?`);
      return false;
    } else {
      if (root.data === value) {
        console.log(`${value} present?`);
        return true;
      } else if (value < root.data) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root: TreeNode | null) {
    if (!root) {
      return;
    } else {
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root: TreeNode | null) {
    if (!root) {
      return;
    } else {
      this.inOrder(root.left);
      console.log(root.data);
      this.inOrder(root.right);
    }
  }

  postOrder(root: TreeNode | null) {
    if (!root) {
      return;
    } else {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.data);
    }
  }

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr?.data);
      if (curr?.left) {
        queue.push(curr.left);
      }
      if (curr?.right) {
        queue.push(curr.right);
      }
    }
  }

  levelOrderOptimized() {
    const queue: { [key: number]: TreeNode | null } = {};
    let rear = 0;
    let front = 0;
    if (this.root === null) {
      return;
    }
    queue[rear++] = this.root;
    while (front < rear) {
      const current = queue[front];
      delete queue[front++];
      if (current) {
        console.log(current.data);
        if (current.left) {
          queue[rear++] = current.left;
        }
        if (current.right) {
          queue[rear++] = current.right;
        }
      }
    }
  }

  height(root: TreeNode | null): number {
    if (root === null) {
      return -1;
    }
    const leftHeight = this.height(root.left);
    const rightHeight = this.height(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(
    value: number,
    root: TreeNode | null = this.root,
    currentDepth: number = 0,
  ): number {
    if (root === null) {
      return -1;
    }
    if (value === root.data) {
      return currentDepth;
    }
    const leftDepth = this.depth(value, root.left, currentDepth + 1);
    if (leftDepth !== -1) {
      return leftDepth;
    }
    return this.depth(value, root.right, currentDepth + 1);
  }

  isBalanced(root: TreeNode | null = this.root): boolean {
    if (root === null) {
      return true;
    }
    const leftHeight = this.height(root.left);
    const rightHeight = this.height(root.right);
    const heightDiff = Math.abs(leftHeight - rightHeight);
    if (heightDiff > 1) {
      return false;
    }
    return this.isBalanced(root.left) && this.isBalanced(root.right);
  }

  rebalance() {
    const elements: number[] = [];

    // Helper function for in-order traversal to collect sorted elements
    const inOrderTraversal = (root: TreeNode | null) => {
      if (root === null) return;
      inOrderTraversal(root.left);
      elements.push(root.data);
      inOrderTraversal(root.right);
    };

    inOrderTraversal(this.root); // Collect all elements in sorted order

    const buildBalancedTree = (
      arr: number[],
      start: number,
      end: number,
    ): TreeNode | null => {
      if (start > end) return null;

      const mid = Math.floor((start + end) / 2);
      const bst = new TreeNode(arr[mid]);

      bst.left = buildBalancedTree(arr, start, mid - 1);
      bst.right = buildBalancedTree(arr, mid + 1, end);
      return bst;
    };

    this.root = buildBalancedTree(elements, 0, elements.length - 1);
  }
}
