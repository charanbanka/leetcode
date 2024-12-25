/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function (blocked, source, target) {
  //lets start with brute force approach
  if (blocked.length == 0) return true;
  if (source[0] === target[0] && source[1] === target[1]) return false;

  let isSourceGreater = false;

  if (source[0] > target[0]) isSourceGreater = true;

  let solution = [];

  let visited = new Map();

  function checkCondition(x, y) {
    let res;
    if (isSourceGreater) {
      res = x > source[0] || x < target[0] || y > source[1] || y < target[1];
    } else {
      res = x < source[0] || x > target[0] || y < source[1] || y > target[1];
    }
    console.log("ress=>", res, { x, y });
    return res;
  }

  function findPath(current) {
    let { x, y } = current;

    if (x < 0 || y < 0 || x > 999999 || y > 999999 || visited.has(`${x}${y}`))
      return false;

    if (blocked.some((item) => item[0] == x && item[1] == y)) return false;
    if (solution.some((item) => item.x == x && item.y == y)) return false;

    console.log(solution, current);

    solution.push(current);
    visited.set(`${x}${y}`, { x, y });

    if (x == target[0] && y == target[1]) return true;

    let right = findPath({ x, y: y + 1 });
    let bottom = findPath({ x: x + 1, y });
    let left = findPath({ x, y: y - 1 });
    let top = findPath({ x: x - 1, y });

    if (right || bottom || left || top) {
      console.log("final", solution, visited);
      return true;
    } else {
      solution.pop();
    }

    return false;
  }

  return findPath({ x: source[0], y: source[1] });
};

let blocked = [
  [0, 4],
  [1, 2],
  [1, 3],
  [2, 0],
  [2, 4],
  [2, 5],
  [3, 1],
  [3, 3],
  [3, 4],
  [3, 5],
  [4, 0],
  [4, 1],
];

let source = [0, 0];
let target = [4, 3];

console.log(isEscapePossible(blocked, source, target));
