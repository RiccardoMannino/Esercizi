let sum = 0; 

function sumUntil(maxValue) {
 for (let i = 0; i <= maxValue; i++) {
     sum += i
  }
  return sum;
}

console.log(sumUntil(5));