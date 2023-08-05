"use strict"
function solveEquation(a, b, c) {
  let d = Math.pow(b,2)-4*a*c;

  if (d < 0) {
    return [];
  }

  if (d === 0) {
    console.log(-b/(2*a));
    return [-b/(2*a)];
  }

  let arr = [];
   arr.push((-b + Math.sqrt(d) )/(2*a));
  arr.push((-b - Math.sqrt(d) )/(2*a));

  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let percentNumber = Number(percent);
  let contributionNumber = Number(contribution);
  let amountNumber = Number(amount);

  let creditBody = amountNumber - contributionNumber;

  let n = monthDiff(new Date(), date);

  let percentInFraction = percentNumber / 100;

  let monthlyPercent = percentInFraction / 12;

  let payPerMonth = creditBody * (monthlyPercent + (monthlyPercent / ((Math.pow(1 + monthlyPercent, n)) - 1)));

  let totalAmount = payPerMonth * n;

  return Number(totalAmount.toFixed(2));
}

function monthDiff(dateFrom, dateTo) {
  return dateTo.getMonth() - dateFrom.getMonth() + 
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));

  
}