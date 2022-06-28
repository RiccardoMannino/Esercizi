function sum(...numeri) {
    return numeri.reduce((num, n) => num + n, 0);
}

console.log(sum(1, 2, 3, 4, 5));