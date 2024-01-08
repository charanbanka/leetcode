//Binary Tree
//Binary trees have various applications in computer science and are used in data structures
//like binary search trees, expression trees, and Huffman trees, among others.
//They provide efficient ways to organize and search data.

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.root = null;

  this.insert = function (val) {
    let newNode = new Node(val);

    if (this.root == null) {
      this.root = newNode;
      return;
    }

    this.insertNode(this.root, newNode);
  };

  this.insertNode = function (root, newNode) {
    if (newNode.val < root.val) {
      if (root.left) {
        this.insertNode(root.left, newNode);
      } else {
        root.left = newNode;
      }
    } else {
      if (root.right) {
        this.insertNode(root.right, newNode);
      } else {
        root.right = newNode;
      }
    }
  };
  //it will remove children too
  this.remove = function (val) {
    if (!this.root) return null;

    if (this.root.val == val) {
      this.root = null;
      return null;
    }
    this.removeNode(this.root, val);
  };

  this.removeNode = function (node, val) {
    if (node) {
      if (val < node.val) {
        if (node.left && node.left.val == val) {
          node.left = null;
          return;
        } else {
          this.removeNode(node.left, val);
        }
      } else {
        if (node.right && node.right.val == val) {
          node.right = null;
          return;
        } else {
          this.removeNode(node.right, val);
        }
      }
    }
    return null;
  };

  this.preOrderTraversal = function (node = this.root, result = []) {
    if (node) {
      result.push(node.val);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
    return result;
  };

  this.postOrderTraversal = function (node = this.root, result = []) {
    if (node) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.val);
    }
    return result;
  };

  this.inOrderTraversal = function (node = this.root, result = []) {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.val);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  };
}

let bt = new BinaryTree();

bt.insert(10);
bt.insert(7);
bt.insert(190);
bt.insert(70);
bt.insert(120);
bt.insert(73);
bt.insert(3);
bt.insert(2);
bt.insert(5);
bt.insert(140);
bt.insert(320);
bt.insert(173);

console.log("In order");
console.log(bt.inOrderTraversal());
console.log("pre order");
console.log(bt.preOrderTraversal());
console.log("post order");
console.log(bt.postOrderTraversal());

let val = 120;
bt.remove(2);
console.log("after remove", val);
console.log("In order");
console.log(bt.inOrderTraversal());
console.log("pre order");
console.log(bt.preOrderTraversal());
console.log("post order");
console.log(bt.postOrderTraversal());
