function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//LinkedList

function createLinkedList(list) {
  let prevNode = new ListNode();
  const headNode = prevNode;

  for (let val of list) {
    let currentNode = new ListNode(val);
    prevNode.next = currentNode;
    prevNode = currentNode;
  }

  return headNode.next;
}

let list = [10,11,25,67,55]

let head = createLinkedList(list);

console.log(head)