class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    this.root = this._insertNode(this.root, val);
  }
  _insertNode(node, val) {
    if (!node) return new TreeNode(val);
    if (node.val < val) {
      node.right = this._insertNode(node.right, val);
    }
    if (node.val > val) {
      node.left = this._insertNode(node.left, val);
    }
    return node;
  }

  inOrder(node, res = []) {
    if (node) {
      if (node.left) this.inOrder(node.left, res);
      res.push(node.val);
      if (node.right) this.inOrder(node.right, res);
    }
    return res;
  }

  inOrderWithoutRecursion() {
    let stack = [];
    let result = [];
    let cur = this.root;
    while (stack.length > 0 || cur != null) {
      while (cur != null) {
        stack.push(cur);
        cur = cur.left;
      }

      //process the node
      cur = stack.pop();
      result.push(cur.val);

      cur = cur.right;
    }
    return result;
  }

  preOrder() {
    let stack = [];
    let result = [];
    let cur = this.root;

    return result;
  }

  lowestCommonAncestor(root, first, second) {
    if (first.val < root && second.val < root) {
      return this.lowestCommonAncestor(root.left, first, second);
    }
    return root;
  }
}

let bst = new BST();
for (let val of [7, 5, 6, 4, 10, 9, 65]) {
  bst.insert(val);
}

console.log("head", bst.root);
console.log("inOrder", bst.inOrder(bst.root));

console.log("inOrderWithoutRecursion", bst.inOrderWithoutRecursion());

console.log(Math.min(undefined,undefined))
