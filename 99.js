//create tree  node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let stack = [
    {
      node: root,
      min: { val: -Infinity, node: root },
      max: { val: Infinity, node: root },
    },
  ];
  while (stack.length) {
    let { node, min, max } = stack.pop();
    if (min.val >= node.val) {
      let temp = node.val;
      node.val = min.node.val;
      min.node.val = temp;

    }
    if (max.val <= node.val) {
      let temp = node.val;
      node.val = max.node.val;
      max.node.val = temp;
    }
    if (node.left) {
      stack.push({
        node: node.left,
        min,
        max: { val: node.val, node: node },
      });
    }
    if (node.right)
      stack.push({
        node: node.right,
        min: { val: node.val, node: node },
        max,
      });
  }

  return root;
};

let root = new TreeNode(2);

// root.left = new TreeNode(1);
root.right = new TreeNode(3);
root.right.right = new TreeNode(2);

// console.log(root);

recoverTree(root);

console.log(root);
