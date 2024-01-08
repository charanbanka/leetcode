//adelson velsky landis
// avl is a self balancing binary search tree (height balanced binary search tree)
//The balance is maintained by ensuring that the height difference between the left and right
//subtrees of any node (called the balance factor) is at most 1.

class AVLNode {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  //get height of node
  getHeight(node) {
    return node ? node.height : 0;
  }

  //update height
  updateHeight(node) {
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  //get balance factor
  getBalanceFactor(node) {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Right rotation
  rotateRight(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    this.updateHeight(y);
    this.updateHeight(x);

    return x;
  }

  // Left rotation
  rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }

  // Insert a key into the AVL Tree
  insert(key) {
    this.root = this._insert(this.root, key);
  }

  _insert(root, key) {
    // Perform standard BST insert
    if (root === null) {
      return new AVLNode(key);
    }

    if (key < root.key) {
      root.left = this._insert(root.left, key);
    } else if (key > root.key) {
      root.right = this._insert(root.right, key);
    } else {
      // Duplicate keys are not allowed in AVL Trees
      return root;
    }

    // Update height of current node
    this.updateHeight(root);

    // Get the balance factor to check whether this node became unbalanced
    const balance = this.getBalanceFactor(root);

    // Left Heavy
    if (balance > 1 && key < root.left.key) {
      return this.rotateRight(root);
    }

    // Right Heavy
    if (balance < -1 && key > root.right.key) {
      return this.rotateLeft(root);
    }

    // Left Right Heavy
    if (balance > 1 && key > root.left.key) {
      root.left = this.rotateLeft(root.left);
      return this.rotateRight(root);
    }

    // Right Left Heavy
    if (balance < -1 && key < root.right.key) {
      root.right = this.rotateRight(root.right);
      return this.rotateLeft(root);
    }

    return root;
  }

  // Perform in-order traversal (for testing purposes)
  inOrderTraversal(node = this.root) {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.key);
      this.inOrderTraversal(node.right);
    }
  }
}

// Example usage:
const avlTree = new AVLTree();

avlTree.insert(20);
avlTree.insert(10);
avlTree.insert(30);
avlTree.insert(25);
avlTree.insert(27);

console.log("In-order traversal of AVL Tree:");
avlTree.inOrderTraversal();
