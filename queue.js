class Queue {
  constructor() {
    this.items = [];
    this.front = -1;
    this.rear = -1;
  }

  addQueue(val) {
    if (this.rear == -1) {
      this.rear++;
    }
    ++this.front;
    this.items[this.front] = val;
  }

  deleteQueue() {
    if (this.rear > this.front) return undefined;

    return this.items[++this.rear];
  }
  display() {
    console.log("queue elements are");
    for (let i = this.rear > -1 ? this.rear : 0; i <= this.front; i++)
      console.log(this.items[i]);
  }
}

let q = new Queue();
q.addQueue(10);
q.addQueue(87);
q.deleteQueue();
q.addQueue(867);
q.display();
