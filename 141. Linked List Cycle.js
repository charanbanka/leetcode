function ListNode(val) {
  this.val = val || null;
  this.next = null;
}

function createLinedList(list) {
  let prevNode = new ListNode();
  let head = prevNode;
  for (let num of list) {
    let newNode = new ListNode(num);
    prevNode.next = newNode;
    prevNode = newNode;
  }
  return head.next;
}

let list = [5, 4, 55, 67, 4, 5];

let head = createLinedList(list);

let currentNode = head;

let hashMap = new Map();
while (currentNode) {
  console.log(currentNode);
  hashMap.set(currentNode, true);
  console.log(hashMap);
  currentNode = currentNode.next;
}

//use two pointers approach

function findCycle(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) return true;
  }

  return false;
}
