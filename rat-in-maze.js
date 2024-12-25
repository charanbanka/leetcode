class RatInMaze {
  constructor(rows = 5, cols = 5, blockedCount = 4) {
    this.rows = rows;
    this.cols = cols;
    this.blockedCount = blockedCount;

    // Initialize maze with all cells set to 0 (unblocked)
    this.maze = Array(rows)
      .fill()
      .map(() => Array(cols).fill(0));

    this.blocked = new Map();
    this.solution = new Map();
  }

  getKey(x, y) {
    return `${x}_${y}`;
  }

  blockRandomly() {
    let count = 0;
    while (count < this.blockedCount) {
      let x = Math.floor(Math.random() * this.rows);
      let y = Math.floor(Math.random() * this.cols);
      let key = this.getKey(x, y);

      // Ensure (0,0) and (rows-1,cols-1) are not blocked and check if not already blocked
      if (
        (x !== 0 || y !== 0) &&
        (x !== this.rows - 1 || y !== this.cols - 1) &&
        !this.blocked.has(key)
      ) {
        this.blocked.set(key, true);
        this.maze[x][y] = 1; // Mark as blocked
        count++;
      }
    }
    console.log(`Blocked cells count: ${count}`);
  }

  //which follows DFS
  findPath(x, y) {
    //validate coordinates
    let key = this.getKey(x, y);
    if (
      x >= 0 &&
      x < this.rows &&
      y >= 0 &&
      y < this.cols &&
      !this.blocked.has(key) &&
      !this.solution.has(key)
    ) {
      //save coordinates into solution
      this.solution.set(key, [x, y]);

      if (x == this.rows - 1 && y === this.cols - 1) return true;

      //check path from all directions
      let right = this.findPath(x, y + 1);
      let bottom = this.findPath(x + 1, y);
      let left = this.findPath(x, y - 1);
      let top = this.findPath(x - 1, y);

      if (right || left || bottom || top) {
        return true;
      } else {
        this.solution.delete(key);
      }
    }

    return false;
  }

  //BFS for shortest path
  findPathBTS() {
    let queue = [[0, 0, []]];
    let visited = new Set();
    visited.add(this.getKey(0, 0));
    while (queue.length) {
      let [x, y, path] = queue.shift();
      let newPath = [...path, [x, y]];

      //check the coordinated are destionation
      if (x === this.rows - 1 && y === this.cols - 1) {
        this.solution.set(this.getKey(x, y), newPath);
      }

      //console.log("path=>", newPath, x, y);

      //explore all four directions
      let directions = [
        [x, y + 1],
        [x + 1, y],
        [x, y - 1],
        [x - 1, y],
      ];

      for (let [newX, newY] of directions) {
        let newkey = this.getKey(newX, newY);
        if (
          newX >= 0 &&
          newX < this.rows &&
          newY >= 0 &&
          newY < this.cols &&
          !this.blocked.has(newkey) &&
          !visited.has(newkey)
        ) {
          visited.add(newkey);
          queue.push([newX, newY, newPath]);
        }
      }
    }
  }

  generateMaze() {
    this.blockRandomly();
    this.findPath(0, 0);
  }

  renderMaze(){
    
  }
}

let r = new RatInMaze();
r.generateMaze();
console.log(r.maze);
console.log(r.solution);

let x = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
];
