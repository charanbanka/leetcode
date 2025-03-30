class CircularQueue {
  constructor(limit = Infinity) {
    this.front = 0;
    this.rear = -1;
    this.items = new Array(limit); // Fixed size array
    this.limit = limit;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.limit;
  }

  enQueue(val) {
    if (this.isFull()) return "Queue is Full";

    // Move rear circularly
    this.rear = (this.rear + 1) % this.limit;
    this.items[this.rear] = val;
    this.size++;
    return "Success";
  }

  deQueue() {
    if (this.isEmpty()) return "Queue is Empty";

    const item = this.items[this.front];
    this.items[this.front] = undefined; // Clear the spot (optional)
    this.front = (this.front + 1) % this.limit;
    this.size--;

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = -1;
    }
    return item;
  }

  arrayList() {
    if (this.isEmpty()) return [];

    const result = [];
    let count = 0;
    let index = this.front;

    while (count < this.size) {
      result.push(this.items[index]);
      index = (index + 1) % this.limit;
      count++;
    }
    return result;
  }
}

// Test the implementation
let q = new CircularQueue(2);

console.log(q.deQueue()); // "Queue is Empty"

console.log(q.enQueue(4)); // "Success"
console.log(q.enQueue(5)); // "Success"
console.log(q.enQueue(7)); // "Queue is Full"
console.log("array", q.arrayList()); // [4, 5]

console.log(q.deQueue()); // 4
console.log(q.enQueue(10)); // "Success"
console.log("array", q.arrayList()); // [5, 10]

console.log(q.enQueue(40)); // "Queue is Full"
console.log("array", q.arrayList()); // [5, 10]

console.log(q.deQueue()); // 5

/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.capacity = k; // Maximum size of the deque
  this.deque = new Array(k); // Array to store elements
  this.front = -1; // Index of the front element
  this.rear = -1; // Index of the rear element
  this.size = 0; // Current number of elements
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;

  if (this.isEmpty()) {
    this.front = 0;
    this.rear = 0;
  } else {
    this.front = (this.front - 1 + this.capacity) % this.capacity;
  }
  this.deque[this.front] = value;
  this.size++;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;

  if (this.isEmpty()) {
    this.front = 0;
    this.rear = 0;
  } else {
    this.rear = (this.rear + 1) % this.capacity;
  }
  this.deque[this.rear] = value;
  this.size++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;

  if (this.size === 1) {
    this.front = -1;
    this.rear = -1;
  } else {
    this.front = (this.front + 1) % this.capacity;
  }
  this.size--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;

  if (this.size === 1) {
    this.front = -1;
    this.rear = -1;
  } else {
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
  }
  this.size--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1;
  return this.deque[this.front];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1;
  return this.deque[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.size === this.capacity;
};

console.log("Dequeue");

let mcq = new MyCircularDeque(6);

console.log(mcq.insertFront(4));
console.log(mcq.insertFront(5));
console.log(mcq.insertFront(58));

console.log(mcq.insertLast(8));
console.log(mcq.insertLast(45));

console.log(mcq.deque);


