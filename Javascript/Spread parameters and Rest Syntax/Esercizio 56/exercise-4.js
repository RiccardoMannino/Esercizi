function sum(...num) {
  return num.reduce((numeri, n) => numeri + n,0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));