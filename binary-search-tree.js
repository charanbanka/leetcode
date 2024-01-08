//Binary search tree -> it is a binary tree with additional property that makes it efficient in searching and retrieve of data
//each node consists of
//1. left subtree of nodes contains only nodes  less than  node's val
//2. right subtree of nodes contains only nodes greater than node's val
//3. both left and right subtrees are also binary search trees

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root = null;
  constructor() {
    this.root = null;
  }
  //instance method
  insert(val) {
    let newNode = new TreeNode(val);
    if (this.root == null) {
      this.root == newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left) this.insertNode(node.left, newNode);
      else node.left = newNode;
    } else {
      if (node.right) this.insertNode(node.right, newNode);
      else node.right = newNode;
    }
  }

  //delete method
  //3 cases => 1.no child 2. one child 3.two chuild
  // two ways to re-arrange -> 1. inorder predecessor 2. inorder successor

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  // Helper function to find the minimum val node in a BST
  findMinNode(node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // Helper function to perform the actual deletion
  deleteNode(root, key) {
    if (root === null) {
      return root;
    }

    // If the key to be deleted is smaller than the root's key,
    // then it lies in the left subtree
    if (key < root.key) {
      root.left = this.deleteNode(root.left, key);
    }
    // If the key to be deleted is larger than the root's key,
    // then it lies in the right subtree
    else if (key > root.key) {
      root.right = this.deleteNode(root.right, key);
    }
    // If key is same as root's key, then this is the node to be deleted
    else {
      // Node with only one child or no child
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      // Node with two children: Get the in-order successor (smallest
      // in the right subtree) or in-order predecessor (largest in the left subtree)
      root.key = this.findMinNode(root.right).key;

      // Delete the in-order successor
      root.right = this.deleteNode(root.right, root.key);
    }

    return root;
  }

  //Inorder traversal
  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.val);
      this.inOrder(node.right, result);
    }
    return result;
  }
}
 function contructBinaryTree(arr) {
  let bst = new BinarySearchTree();
  for (let val of arr) bst.insert(val);

  return bst.root;
}

let bst = new BinarySearchTree();
bst.insert(20);
bst.insert(16);
bst.insert(5);
bst.insert(18);
bst.insert(17);
bst.insert(19);
bst.insert(60);
bst.insert(85);
bst.insert(70);


exports.BinaryTree = {contructBinaryTree}