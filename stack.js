let stack = [];
let top = -1;

function add(val) {
  top = top + 1;
  stack[top] = val;
  return val;
}

function pop() {
  if (top < 0) {
    return null;
  } else {
    top = top - 1;
    return stack[top + 1];
  }
}

function display() {
  console.log("stack elements are:");

  for (let i = 0; i <= top; i++) console.log(stack[i]);
}

display();
add(10);
display();
add(20);
display();
pop();
display();
add(208);
display();
