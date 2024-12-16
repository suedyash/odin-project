"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = null;
    }
    Tree.prototype.isEmpty = function () {
        return this.root === null;
    };
    Tree.prototype.insertNode = function (root, newNode) {
        if (newNode.data < root.data) {
            if (root.left === null) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode);
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode;
            }
            else {
                this.insertNode(root.right, newNode);
            }
        }
    };
    Tree.prototype.insert = function (value) {
        var newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    Tree.prototype.insertArr = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            var value = arr[i];
            this.insert(value);
        }
    };
    Tree.prototype.min = function (root) {
        if (root === null) {
            return null;
        }
        if (!root.left) {
            return root.data;
        }
        else {
            return this.min(root.left);
        }
    };
    Tree.prototype.max = function (root) {
        if (root === null) {
            return null;
        }
        if (!root.right) {
            return root.data;
        }
        else {
            return this.max(root.right);
        }
    };
    Tree.prototype.deleteNode = function (root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.data) {
            root.left = this.deleteNode(root.left, value);
        }
        else if (value > root.data) {
            root.right = this.deleteNode(root.right, value);
        }
        else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            }
            if (!root.right) {
                return root.left;
            }
            var minRight = this.min(root.right);
            if (minRight === null) {
                throw new Error("Unexpected null value returned by min method.");
            }
            root.data = minRight;
            root.right = this.deleteNode(root.right, root.data);
        }
        return root;
    };
    Tree.prototype.delete = function (value) {
        this.root = this.deleteNode(this.root, value);
    };
    Tree.prototype.search = function (root, value) {
        if (!root) {
            console.log("".concat(value, " present?"));
            return false;
        }
        else {
            if (root.data === value) {
                console.log("".concat(value, " present?"));
                return true;
            }
            else if (value < root.data) {
                return this.search(root.left, value);
            }
            else {
                return this.search(root.right, value);
            }
        }
    };
    Tree.prototype.preOrder = function (root) {
        if (!root) {
            return;
        }
        else {
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    };
    Tree.prototype.inOrder = function (root) {
        if (!root) {
            return;
        }
        else {
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    };
    Tree.prototype.postOrder = function (root) {
        if (!root) {
            return;
        }
        else {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    };
    Tree.prototype.levelOrder = function () {
        var queue = [];
        queue.push(this.root);
        while (queue.length) {
            var curr = queue.shift();
            console.log(curr === null || curr === void 0 ? void 0 : curr.data);
            if (curr === null || curr === void 0 ? void 0 : curr.left) {
                queue.push(curr.left);
            }
            if (curr === null || curr === void 0 ? void 0 : curr.right) {
                queue.push(curr.right);
            }
        }
    };
    Tree.prototype.levelOrderOptimized = function () {
        var queue = {};
        var rear = 0;
        var front = 0;
        if (this.root === null) {
            return;
        }
        queue[rear++] = this.root;
        while (front < rear) {
            var current = queue[front];
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
    };
    Tree.prototype.height = function (root) {
        if (root === null) {
            return -1;
        }
        var leftHeight = this.height(root.left);
        var rightHeight = this.height(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    };
    Tree.prototype.depth = function (value, root, currentDepth) {
        if (root === void 0) { root = this.root; }
        if (currentDepth === void 0) { currentDepth = 0; }
        if (root === null) {
            return -1;
        }
        if (value === root.data) {
            return currentDepth;
        }
        var leftDepth = this.depth(value, root.left, currentDepth + 1);
        if (leftDepth !== -1) {
            return leftDepth;
        }
        return this.depth(value, root.right, currentDepth + 1);
    };
    Tree.prototype.isBalanced = function (root) {
        if (root === void 0) { root = this.root; }
        if (root === null) {
            return true;
        }
        var leftHeight = this.height(root.left);
        var rightHeight = this.height(root.right);
        var heightDiff = Math.abs(leftHeight - rightHeight);
        if (heightDiff > 1) {
            return false;
        }
        return this.isBalanced(root.left) && this.isBalanced(root.right);
    };
    Tree.prototype.rebalance = function () {
        var elements = [];
        // Helper function for in-order traversal to collect sorted elements
        var inOrderTraversal = function (root) {
            if (root === null)
                return;
            inOrderTraversal(root.left);
            elements.push(root.data);
            inOrderTraversal(root.right);
        };
        inOrderTraversal(this.root); // Collect all elements in sorted order
        var buildBalancedTree = function (arr, start, end) {
            if (start > end)
                return null;
            var mid = Math.floor((start + end) / 2);
            var bst = new TreeNode(arr[mid]);
            bst.left = buildBalancedTree(arr, start, mid - 1);
            bst.right = buildBalancedTree(arr, mid + 1, end);
            return bst;
        };
        this.root = buildBalancedTree(elements, 0, elements.length - 1);
    };
    return Tree;
}());
exports.Tree = Tree;
