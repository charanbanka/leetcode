//Linked List

function LinkedList() {
  var length = 0;
  var head = null;
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.isEmpty = function () {
    return length == 0;
  };

  this.add = function (element) {
    let newNode = new Node(element);
    if (head == null) {
      head = newNode;
    } else {
      let curNode = head;
      while (curNode.next) {
        curNode = curNode.next;
      }
      curNode.next = newNode;
    }
    length++;
  };

  this.remove = function () {
    if (length == 0) return null;
    let curNode = head;
    let prevNode = null;
    if (length == 0) {
      head = null;
    } else {
      while (curNode.next) {
        prevNode = curNode;
        curNode = curNode.next;
      }
      prevNode.next = null;
    }
    length--;
    return curNode.element;
  };

  this.removeAt = function (index) {
    let curNode = head;
    let prevNode = null;
    let curIndex = 0;
    if (index < 0 || index >= length) return null;
    if (index == 0) {
      head = curNode.next;
    } else {
      while (curIndex < index) {
        prevNode = curNode;
        curNode = curNode.next;
        curIndex++;
      }
      prevNode.next = curNode.next;
    }
    length--;
    return curNode.element;
  };

  this.getElements = function () {
    let curNode = head;
    let result = [];
    while (curNode) {
      result.push(curNode.element);
      curNode = curNode.next;
    }
    return result;
  };

  this.reverse = function () {
    let prev = null;
    let curr = head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    head = prev;
  };
}

let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
console.log(list.getElements());
list.removeAt(2);
console.log(list.getElements());
list.add(40);
list.add(50);
console.log(list.getElements());
list.removeAt(2);
console.log(list.getElements());
list.reverse();
console.log(list.getElements());

exports.LinkedList = LinkedList;
