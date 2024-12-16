"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = null;
    }
    Tree.prototype.isEmpty = function () {
        return this.root === null;
    };
    return Tree;
}());
exports.Tree = Tree;
var bst = new Tree();
console.log("Tree empty?", bst.isEmpty());
// TODO: Sort & Remove duplicated
// TODO: insert(value) & delete(value) func using tree traversal
// TODO: find(value)
// TODO: levelOrder(callback) func => traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as argument, similarly to how Array.prototype.forEach might work for arrays.
