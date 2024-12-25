// Definition for a _Node.
function _Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  let stack = [node];
  let visited = new Map();
  let addr = new Map();

  function getNode(val) {
    let cur = addr.get(val);
    if (!cur) {
      cur = new _Node(val);
      addr.set(val, cur);
    }
    return cur;
  }

  while (stack.length > 0) {
    let cur = stack.pop();
    if (!cur || visited.has(cur.val)) continue;
    let newCur = getNode(cur.val);
    let n = [];
    for (let neighbor of cur.neighbors) {
      if (!visited.has(neighbor.val)) {
        stack.push(neighbor);
      }
      let neighborNode = getNode(neighbor.val);
      n.push(neighborNode);
    }
    newCur.neighbors = n;
    visited.set(cur.val, true);
  }

  return addr.get(1) || [];
};

let node = new _Node(1);
let node2 = new _Node(2);
let node3 = new _Node(3);
let node4 = new _Node(4);

node.neighbors = [node2, node4];
node2.neighbors = [node, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node, node3];

console.log(cloneGraph(null))
