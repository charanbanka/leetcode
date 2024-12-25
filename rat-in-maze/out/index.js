console.log("JavaScript Loaded");

class RatInMaze {
  constructor(rows = 4, cols = 4, blockedCells = 4) {
    this.rows = rows;
    this.cols = cols;
    this.blockedCells = blockedCells;

    // Initialize maze structure and state variables
    this.maze = [];
    this.blocked = new Map();
    this.pathSolution = new Map();
    this.isSolving = false;
    this.isPaused = false;
    this.currentStepIndex = 0;
  }

  getCellKey(x, y) {
    return `${x}_${y}`;
  }

  initializeMaze() {
    this.maze = Array.from({ length: this.rows }, () =>
      Array(this.cols).fill(0)
    );
  }

  randomlyBlockCells() {
    let count = 0;
    while (count < this.blockedCells) {
      let x = Math.floor(Math.random() * this.rows);
      let y = Math.floor(Math.random() * this.cols);
      let key = this.getCellKey(x, y);

      if (
        (x !== 0 || y !== 0) &&
        (x !== this.rows - 1 || y !== this.cols - 1) &&
        !this.blocked.has(key)
      ) {
        this.blocked.set(key, true);
        this.maze[x][y] = 1; // Mark as blocked in maze array
        count++;
      }
    }
    console.log(`Blocked cells: ${count}`);
  }

  // Depth-First Search (DFS) for finding a path
  findPathDFS(x, y) {
    const key = this.getCellKey(x, y);

    if (
      x >= 0 &&
      x < this.rows &&
      y >= 0 &&
      y < this.cols &&
      !this.blocked.has(key) &&
      !this.pathSolution.has(key)
    ) {
      this.pathSolution.set(key, [x, y]);

      if (x === this.rows - 1 && y === this.cols - 1) return true;

      const directions = [
        this.findPathDFS(x, y + 1),
        this.findPathDFS(x + 1, y),
        this.findPathDFS(x, y - 1),
        this.findPathDFS(x - 1, y),
      ];

      if (directions.some((result) => result)) return true;
      else this.pathSolution.delete(key);
    }
    return false;
  }

  // Breadth-First Search (BFS) for shortest path
  findShortestPathBFS() {
    let queue = [[0, 0, []]];
    let visited = new Set();
    visited.add(this.getCellKey(0, 0));

    while (queue.length) {
      let [x, y, path] = queue.shift();
      let currentPath = [...path, [x, y]];

      if (x === this.rows - 1 && y === this.cols - 1) {
        this.pathSolution.set(this.getCellKey(x, y), currentPath);
        break;
      }

      const directions = [
        [x, y + 1],
        [x + 1, y],
        [x, y - 1],
        [x - 1, y],
      ];

      for (let [newX, newY] of directions) {
        let newKey = this.getCellKey(newX, newY);
        if (
          newX >= 0 &&
          newX < this.rows &&
          newY >= 0 &&
          newY < this.cols &&
          !this.blocked.has(newKey) &&
          !visited.has(newKey)
        ) {
          visited.add(newKey);
          queue.push([newX, newY, currentPath]);
        }
      }
    }
  }

  generateMaze(rows, cols, blockedCells) {
    this.rows = rows;
    this.cols = cols;
    this.blockedCells = blockedCells;
    this.isSolving = false;
    this.blocked.clear();
    this.pathSolution.clear();
    this.initializeMaze();
    this.randomlyBlockCells();
    this.renderMaze();
    this.resetPath();
  }

  renderMaze() {
    const mazeDiv = document.getElementById("maze");
    mazeDiv.innerHTML = "";
    mazeDiv.style.width = `${52 * this.cols}px`;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.classList.add(this.getCellKey(i, j));
        let title = "";

        if (this.blocked.has(this.getCellKey(i, j))) {
          cell.classList.add("blocked");
          title = "blocked";
        }
        if (i === 0 && j === 0) {
          cell.classList.add("source");
          const rat = document.createElement("div");
          rat.className = "rat";
          cell.classList.add("start");
          cell.appendChild(rat);
          title = "start";
        }
        if (i === this.rows - 1 && j === this.cols - 1) {
          cell.classList.add("end");
          title = "end";
        }
        cell.setAttribute("title", title);
        mazeDiv.appendChild(cell);
      }
    }
  }

  async animatePath() {
    if (!this.isSolving || this.isPaused) return;

    const path = Array.from(this.pathSolution.values());

    if (this.currentStepIndex < path.length) {
      const [x, y] = path[this.currentStepIndex];
      const cell = document.getElementsByClassName(this.getCellKey(x, y))[0];
      if (cell) cell.classList.add("path");

      this.currentStepIndex++;
      if (this.currentStepIndex === path.length) {
        document.getElementById("victory").style.display = "block";
        document.getElementById("pause").disabled = true;
        let ratElements = document.getElementsByClassName("rat");
        if (ratElements.length > 0) {
          let ratElement = ratElements[0]; // Get the first element with class "rat"
          ratElement.remove(); // Remove the element from the DOM
        }

        const rat = document.createElement("div");
        rat.className = "rat";
        cell.appendChild(rat);
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.animatePath();
    }
  }

  startSolving() {
    if (!this.isSolving) {
      this.isSolving = true;
      this.isPaused = false;
      this.findPathDFS(0, 0);
      if (this.pathSolution.size === 0) {
        alert("No solution found.");
        return;
      }
      document.getElementById("start").disabled = true;
      document.getElementById("pause").disabled = false;
      document.getElementById("reset").disabled = false;
      this.animatePath();
    }
  }

  pauseSolving() {
    document.getElementById("pause").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("start").innerText = "Restart";
    this.isPaused = true;
    this.isSolving = false;
  }

  resetPath() {
    this.isSolving = false;
    this.currentStepIndex = 0;
    document.getElementById("start").disabled = false;
    document.getElementById("start").innerText = "Start";
    document.getElementById("pause").disabled = true;
    document.getElementById("reset").disabled = true;
    this.pathSolution.clear();
  }
}

const mazeSolver = new RatInMaze();
console.log(mazeSolver.maze);
console.log(mazeSolver.pathSolution);

function generateMaze() {
  const rows = parseInt(document.getElementById("rows").value);
  const cols = parseInt(document.getElementById("cols").value);
  const blockedCells = parseInt(document.getElementById("blockedCells").value);
  mazeSolver.generateMaze(rows, cols, blockedCells);
  console.log("m", mazeSolver.maze);
}

function startMaze() {
  mazeSolver.startSolving();
}

function pauseMaze() {
  mazeSolver.pauseSolving();
}

function resetMaze() {
  mazeSolver.resetPath();
  mazeSolver.generateMaze(4, 4, 4);
}

function closeVictoryMessage() {
  document.getElementById("victory").style.display = "none";
}

// setTimeout(generateMaze, 100);
generateMaze();
