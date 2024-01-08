function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isValidBST = function (root) {
  if (root.left == null && root.right == null) return true;

  const inOrderTraversal = (node, result = []) => {
    if (node) {
      inOrderTraversal(node.left, result);
      result.push(node.val);
      inOrderTraversal(node.right, result);
    }
    return result;
  };

  let inOrder = inOrderTraversal(root);
  for(let i=0; i<inOrder.length-1; i++){
    if(inOrder[i] >= inOrder[i+1]) return false;
    if(i == inOrder.length -2) break;
  }
  return true;
};

let root = new TreeNode(1);
root.left = new TreeNode(1);
root.right = null; // new TreeNode(4);
// root.right.left = new TreeNode(3);
// root.right.right = new TreeNode(6);
let res = isValidBST(root);
console.log(res);
