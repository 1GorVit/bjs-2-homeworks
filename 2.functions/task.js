function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let avg = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
      if (arr[i] < min) {
          min = arr[i];
      }
      sum = sum + arr[i];
  }
  avg = Number(parseFloat(sum / arr.length).toFixed(2));
  return {
      min: min,
      max: max,
      avg: avg
  };
}
function summElementsWorker(...arr) {
  const initialValue = 0;
  const sumWithInitial = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
  );
  return sumWithInitial;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  if (arr.length === 0) {
      return 0;
  } else {
      return Math.abs(min - max);
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          sumEvenElement = sumEvenElement + arr[i];
      } else {
          sumOddElement = sumOddElement + arr[i];
      }
  }
  return (sumEvenElement - sumOddElement);
}


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let count = 0;
  if (arr.length === 0) {
      return 0;
  }
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          sumEvenElement = sumEvenElement + arr[i];
          count = count + 1;
      }
  }
  return Number(parseFloat(sumEvenElement / count).toFixed(2));

}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = Number.MIN_VALUE;
  // -Infinity устарел
  let arr = [];
  for (let i = 0; i < arrOfArr.length; i++) {
      arr[i] = func(...arrOfArr[i]);
      maxWorkerResult = Math.max(arr[i], maxWorkerResult);
  }
  return maxWorkerResult;
}
