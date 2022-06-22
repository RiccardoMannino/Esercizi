function memoize(fn) {
  let cache = {};
  return valore => {
    console.log(`${valore} è già presente nella cache`);
    if (valore in cache){
      return cache[valore];
    }
    else{
      //cache[valore] = fn[valore];
      return fn(valore);
    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

_factorial = memoize(factorial);
console.log(_factorial(10));
console.log(_factorial(6));
console.log(_factorial(5));