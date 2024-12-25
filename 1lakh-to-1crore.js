function oneLakhToOneCrore(amount,n =60) {
  let i = 0;

  while (i < n) {
    amount += Math.floor((amount * 10) / 100);
    console.log(`${i + 1} =>`, amount);
    i++;
  }

  return amount;
}

console.log(oneLakhToOneCrore(100000))

//principle amount 1 lakh, earn 10% per month after 5 years you will get 3 crore.

//here is the trick you need to find the stock which return 10% for that month.

//if you make it you will rock
