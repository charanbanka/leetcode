class Queue {
  constructor(limit = Infinity) {
    this.front = 0;
    this.rear = -1;
    this.items = [];
    this.limit = limit;
    this.size = 0; // Tracks current number of elements
  }

  // Add element to rear of queue
  enQueue(val) {
    if (this.isFull()) {
      return "Queue is Full";
    }
    this.items[++this.rear] = val;
    this.size++;
    return "Success";
  }

  // Remove and return element from front of queue
  deQueue() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    const item = this.items[this.front++];
    this.size--;

    // Reset pointers when queue becomes empty to prevent unnecessary growth
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = -1;
    }
    return item;
  }

  // Check if queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Check if queue is full
  isFull() {
    return this.size >= this.limit;
  }

  // Return front element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.items[this.front];
  }

  // Return current size of queue
  getSize() {
    return this.size;
  }

  // Clear the queue
  clear() {
    this.items = [];
    this.front = 0;
    this.rear = -1;
    this.size = 0;
    return "Queue Cleared";
  }

  // Convert queue to array (returns copy of current elements)
  toArray() {
    if (this.isEmpty()) {
      return [];
    }
    return this.items.slice(this.front, this.rear + 1);
  }

  // Get remaining capacity
  remainingCapacity() {
    return this.limit - this.size;
  }
}

let queue = new Queue(3); // Creates queue with limit of 3

queue.enQueue(1); // "Success" (queue: [1])
queue.enQueue(2); // "Success" (queue: [1, 2])
queue.enQueue(3); // "Success" (queue: [1, 2, 3])
queue.enQueue(4); // "Queue is Full" (queue: [1, 2, 3])

queue.deQueue(); // returns 1 (queue: [2, 3])
queue.deQueue(); // returns 2 (queue: [3])
queue.deQueue(); // returns 3 (queue: [])
queue.deQueue(); // "Queue is empty"

const colors = ["red", "yellow", "blue"];
colors[4] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']

console.log(colors);

// circular queue 
