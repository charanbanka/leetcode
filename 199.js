var largestOddNumber = function (num) {
  let temp = num;
  let len = temp.length;
  while (len >= 0) {
    let last = parseInt(temp[len - 1]);
    if (last % 2 == 1) return temp.slice(0,len);
    len--;
  }
  return "";
};

console.log(largestOddNumber("000000000000"));
