//fibonacci sequence

// 0 1 1 2 3 5 8 13 21
// 0 1 2 3 4 5 6 7

const fibo = (n) => {
  if (n == 0) return 0;
  if (n == 1) return 1;

  return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(8));
