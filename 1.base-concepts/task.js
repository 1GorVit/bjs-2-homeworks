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

