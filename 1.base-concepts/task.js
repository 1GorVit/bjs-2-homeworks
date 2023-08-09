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

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  let percentTest = Number(percent);
  let contributionTest = Number(contribution);
  let amountTest = Number(amount);
  
    let credit = amount - contribution;
  let dateMonth = date.getMonth();
  let dateYear = date.getFullYear();
  let dateNow = new Date(Date.now());
  let dateNowMonth = dateNow.getMonth();
  let dateNowYear = dateNow.getFullYear();
  let month = (dateYear-dateNowYear)*12+(dateMonth-dateNowMonth);
  
  let payment = credit * (percent/12/100 + (percent/12/100 / (((1 + percent/12/100)**month - 1))));
  totalAmount = payment * month;

return Number(totalAmount.toFixed(2));}