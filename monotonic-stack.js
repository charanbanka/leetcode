//Monotonic Stack
//ascending order stack
function MonotonicStack(arr) {
  let res = [];
  let stack = [];
  let top = -1;
  for (let i = 0; i < arr.length; i++) {
    while (top != -1 && stack[top] <= arr[i]) {
      stack.pop();
      top--;
    }
    if (top == -1) {
      res[i] = -1;
    } else {
      res[i] = stack[top];
    }

    stack[++top] = arr[i];
  }
  console.log("monotonic stack", res);

  //   let totalWieght = 0;
  //   let tempWieght = 0;
  //   let minusWieght = 0;
  //   let len = res.length;
  //   let maxStack = [];
  //   top = -1;
  //   let currMax = res[len - 1];
  //   for (let i = len - 1; i >= 0; --i) {
  //     let [val, index] = maxStack[top] || [-1, -1];
  //     if (res[i] != -1 && res[i] >= val) {
  //       if (res[i] == val) {
  //         tempWieght = Math.max(val * (index - i - 1) - minusWieght, 0);
  //       } else if (res[i] >= val) {
  //         tempWieght = Math.max(res[i] * (index - i - 1) - minusWieght, 0);
  //         totalWieght += tempWieght;
  //         tempWieght = 0;
  //         minusWieght = 0;

  //         maxStack[++top] = [res[i], i];
  //       }
  //     } else if (res[i] != -1) {
  //       minusWieght += res[i];
  //     }
  //   }

  //   totalWieght += Math.max(tempWieght, 0);

  //   fconsole.log("total=>", totalWieght);
  //   return totalWieght;
}

MonotonicStack([2, 1, 2, 4, 3]);

MonotonicStack([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

MonotonicStack([4, 2, 0, 3, 2, 5]);

MonotonicStack([4, 3, 2, 5, 6, 7]);

MonotonicStack([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

MonotonicStack([1, 2, 0, 3, 2, 5]);
