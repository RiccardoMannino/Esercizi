const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = 'Simon';

console.log(person1);
console.log(person2);

/* Facendo il console.log di entrambi gli oggetti restituisce lo stesso risultato perchè gli oggetti vengono
assegnati per riferimento e non per valore  */