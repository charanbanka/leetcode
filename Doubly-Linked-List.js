function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
  function Node(val, prev, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }

  this.addNode = function (val) {
    let newNode = new Node(val);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length += 1;
  };
  this.insertAt = function (val, pos) {
    if (pos > this.length) return false;
    let newNode = new Node(val);
    if (pos == 1) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else if (pos == this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let count = 1;
      let currentNode = this.head;
      while (count < pos) {
        currentNode = currentNode.next;
        count += 1;
      }
      newNode.next = currentNode.next;
      currentNode.next.prev = newNode;
      currentNode.next = newNode;
      newNode.prev = currentNode;
    }

    this.length += 1;
  };

  this.deleteAt = function (pos) {
    if (pos > this.length) return false;

    if (pos == 1) {
      if (this.length == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev.next = null;
        this.head.prev = null;
      }
    } else if (pos == this.length) {
      this.tail = this.tail.prev;
      this.tail.next.prev = null;
      this.tail.next = null;
    } else {
      let count = 1;
      let currentNode = this.head;
      while (count < pos) {
        currentNode = currentNode.next;
        count += 1;
      }
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
      currentNode.prev = null;
      currentNode.next = null;
    }

    this.length -= 1;
  };
  this.display = function () {
    console.log("items=>");
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  };
}

let dll = new DoublyLinkedList();
dll.addNode(4);
dll.display();
dll.addNode(5);
dll.display();
dll.addNode(9);
dll.display();
dll.insertAt(3, 3);
dll.display();
dll.insertAt(10, 3);
dll.display();
dll.deleteAt(1);
dll.display();
