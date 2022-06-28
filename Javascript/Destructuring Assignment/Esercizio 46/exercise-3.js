function isAdult({age}) {
 return age >= 18 // true
}// return age per vedere il valore di age

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));