//lets build binary tree

//create tree  node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  //level order insertion
  insert(val) {
    let newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let queue = [this.root];

    while (queue.length) {
      let cur = queue.shift();

      if (!cur.left) {
        cur.left = newNode;
        return;
      } else {
        queue.push(cur.left);
      }

      if (!cur.right) {
        cur.right = newNode;
        return;
      } else {
        queue.push(cur.right);
      }
    }
  }

  //pre order traversal
  preorder(cur = this.root, result = []) {
    if (cur) {
      result.push(cur.val);
      if (cur.left) this.preorder(cur.left, result);
      if (cur.right) this.preorder(cur.right, result);
    }
    return result;
  }

  preOrderTraversal() {
    let result = [];
    let stack = [this.root];

    while (stack.length) {
      let cur = stack.pop();
      result.push(cur.val);

      if (cur.right) stack.push(cur.right);
      if (cur.left) stack.push(cur.left);
    }
  }

  //in order traversal
  inorder(cur = this.root, result = []) {
    if (cur) {
      if (cur.left) this.inorder(cur.left, result);
      result.push(cur.val);
      if (cur.right) this.inorder(cur.right, result);
    }
    return result;
  }

  inOrderTraversal() {
    let result = [];
    let stack = [];
    let cur = this.root;
    while (cur !== null || stack.length > 0) {
      //go as far left as possible and store in stack
      while (cur !== null) {
        stack.push(cur);
        cur = cur.left;
      }

      //process node
      cur = stack.pop();
      result.push(cur.val);

      //move to right
      cur = cur.right;
    }
    return result;
  }

  //post order traversal
  postorder(cur = this.root, result = []) {
    if (cur) {
      if (cur.left) this.postorder(cur.left, result);
      if (cur.right) this.postorder(cur.right, result);
      result.push(cur.val);
    }
    return result;
  }

  postOrderTraversal() {
    let result = [];
    let stack = [];
    let cur = this.root;
    let lastVisited = null;

    while (cur !== null || stack.length) {
      //go as far left as possibe
      while (cur !== null) {
        stack.push(cur);
        cur = cur.left;
      }
      //peek at the top node from stack
      cur = stack[stack.length - 1];

      //process data
      if (cur.right === null || lastVisited == cur.right) {
        result.push(cur.val);
        lastVisited = stack.pop();
        cur = null;
      } else {
        cur = cur.right;
      }
    }

    return result;
  }

  lowestCommonAncestor(first,second){
    
  }
}

//create binary tree onject

let bt = new BinaryTree();

let list = [100, 90, 80, 70, 60, 40];

for (let val of list) bt.insert(val);
console.log("pre order");
console.log(bt.preorder()); // expected [ 100, 90, 70, 60, 80, 40 ]
// console.log(bt.preorderWithoutrecursion()); // expected [ 100, 90, 70, 60, 80, 40 ]

console.log("in order");
console.log(bt.inorder()); // expected [ 70, 90, 60, 100, 40, 80 ]
console.log(bt.inOrderTraversal()); // expected [ 70, 90, 60, 100, 40, 80 ]

console.log("post order");
console.log(bt.postorder()); // expected [ 70, 60, 90, 40, 80, 100 ]
console.log(bt.postOrderTraversal()); // expected [ 70, 60, 90, 40, 80, 100 ]
