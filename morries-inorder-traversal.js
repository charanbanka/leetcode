function morrisInorderTraversal(root) {
    let result = [];
    let current = root;

    while (current !== null) {
        if (current.left === null) {
            // Visit the node if there's no left child
            result.push(current.val);
            current = current.right;
        } else {
            // Find the inorder predecessor of current
            let predecessor = current.left;
            while (predecessor.right !== null && predecessor.right !== current) {
                predecessor = predecessor.right;
            }

            if (predecessor.right === null) {
                // Make a temporary link to the current node
                predecessor.right = current;
                current = current.left;
            } else {
                // Revert the changes (remove the temporary link)
                predecessor.right = null;
                result.push(current.val);
                current = current.right;
            }
        }
    }
    
    return result;
}


//create tree  node
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  const root = new TreeNode(5);
  root.left = new TreeNode(3)
  root.right = new TreeNode(8);
  root.left.left = new TreeNode(1)
  root.left.right = new TreeNode(4)

  console.log(morrisInorderTraversal(root))

