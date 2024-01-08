function Node(val) {
  this.val = val;
  this.next = null;
}

let head = new Node(1);
let currentNode = head;
let newNode = new Node(2);
currentNode.next = newNode;
currentNode = newNode;
newNode = new Node(3);
currentNode.next = newNode;
currentNode = newNode;
newNode = new Node(4);
currentNode.next = newNode;
currentNode = newNode;
console.log("head", head);

function reverseList(head) {
  let previousNode = null;
  let currentNode = head;
  while (currentNode) {
    let nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
    head = previousNode;
  }

  console.log("head", head);
  return head;
}

reverseList(head)
