//Binary tree - a tree data structure in which each node has atmost two children

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Example: In-order traversal
  inOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  //level order traversal
  levelOrderTraversal(root = this.root) {
    if (root == null) return [];
    let result = [];
    let queue = [root];

    while (queue.length) {
      let currentLevel = [];
      let levelSize = queue.length;

      for (let i = 0; i < levelSize; i++) {
        let currentNode = queue.shift();
        currentLevel.push(currentNode.value);

        if (currentNode.left) queue.push(currentNode.left);
        else new Node()
        if (currentNode.right) queue.push(currentNode.right);
        else new Node()
      }
      result.push(currentLevel);
    }
    return result;
  }
}

// Example Usage:
const binaryTree = new BinaryTree();

binaryTree.insert(10);
binaryTree.insert(50);
binaryTree.insert(15);
binaryTree.insert(32);
binaryTree.insert(7);

let root = new Node(5);
root.left = new Node(1);
root.right = new Node(7);
root.right.left = new Node(6);
root.right.right = new Node(8)

console.log("In-order Traversal:", binaryTree.inOrderTraversal(root));

console.log("Level-order Traversal:", binaryTree.levelOrderTraversal(root));

