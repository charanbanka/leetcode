class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new TreeNode(val);

    if (this.root === null) this.root = newNode;
    else this._insertNode(this.root, newNode);
  }

  _insertNode(root, node) {
    if (root.val < node.val) {
      if (root.right) this._insertNode(root.right, node);
      else root.right = node;
    } else if (root.val > node.val) {
      if (root.left) this._insertNode(root.left, node);
      else root.left = node;
    }
  }

  inOrderTraversal() {
    let result = [];
    let stack = [];
    let cur = this.root;
    while (cur !== null || stack.length > 0) {
      //go as far left as possible and save the nodes in stack
      while (cur !== null) {
        stack.push(cur);
        cur = cur.left;
      }

      //process node
      cur = stack.pop();
      result.push(cur.val);

      cur = cur.right;
    }
    return result;
  }

  bfs(){

  }

  //dfs
  dfs(){
    
  }
}

let bst = new BinarySearchTree();

let list = [50, 40, 90, 30, 100, 70, 45];

for (let val of list) bst.insert(val);
console.log("pre order", bst.root);
// console.log(bt.preorder()); // expected [ 100, 90, 70, 60, 80, 40 ]
// console.log(bt.preorderWithoutrecursion()); // expected [ 100, 90, 70, 60, 80, 40 ]

console.log("in order");
console.log(bst.inOrderTraversal()); // expected [ 70, 90, 60, 100, 40, 80 ]

// console.log("post order");
// console.log(bt.postorder()); // expected [ 70, 60, 90, 40, 80, 100 ]
// console.log(bt.postOrderTraversal()); // expected [ 70, 60, 90, 40, 80, 100 ]
