// m*n grid
//how many ways he can travel from start to end
// 2 * 3
// 0,0  0,1 0,2
// 1,0  1,1 1,2

// 3 ways he can travel

// 1st way 0,0 -> 0,1 -> 0,2 -> 1,2
// 2nd way 0,0 -> 0,1 -> 1,1 -> 1,2
// 3rd way 0,0 -> 1,0 -> 1,1 -> 1,2

function solve(n, amount, percentage = 40, gainPercenatge = 20) {
  let total = 0;
  let totalTax = 0;
  let TotalLegderInterest = 0;
  let totalLedgeAmount = 0;
  let total_profit_loss = 0;
  let total_profit_loss_with_tax = 0;

  let result = [];
  for (i = 0; i < n; i++) {
    let tax = 0;

    let ledgeAmount = (amount / percentage) * (100 - percentage);

    let totalAmount = amount + ledgeAmount;
    let profit_loss = totalAmount * (gainPercenatge / 100);
    total_profit_loss += profit_loss;
    let legderInterest = (ledgeAmount * 30 * 0.041) / 100;

    if (profit_loss > 150000) {
      tax = (profit_loss * 20) / 100;

      total_profit_loss_with_tax += profit_loss - tax;
    }

    amount = profit_loss + amount - legderInterest - tax;

    result.push({
      i: i + 1,
      profit_loss,
      ledgeAmount,
      legderInterest,
      tax,
      total: totalAmount,
      updatedAmount: amount,
      profit_loss,
    });
    console.log("i",i+1, amount, profit_loss, totalAmount, ledgeAmount)
    totalLedgeAmount += ledgeAmount;
    TotalLegderInterest += legderInterest;
    totalTax += tax;

    total += amount;
  }

  return {
    amount: total,
    total_profit_loss,
    total_profit_loss_with_tax,
    totalLedgeAmount,
    TotalLegderInterest,
    totalTax,
    result,
  };
}

console.log(solve(9, 700000, 40, 20));
