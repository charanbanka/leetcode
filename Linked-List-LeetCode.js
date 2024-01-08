function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function LinkedListHead(list) {
  let previousNode = new ListNode();
  let headNode = previousNode;
  for (let num of list) {
    let currentNode = new ListNode(num);
    previousNode.next = currentNode;
    previousNode = currentNode;
  }
  return headNode.next;
}

function DisplayNodes(head) {
  console.log("list nodes:");
  while (head) {
    console.log(head.val);
    head = head.next;
  }
}
exports.LinkedListLeet = { LinkedListHead, ListNode, DisplayNodes };
