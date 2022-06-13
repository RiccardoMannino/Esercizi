function getKeys(obj) {
  for (key in person) {}
  
  return Object.keys(person)

}
/* altro modo per risolvere l'esercizio

  function getKeys(obj) {
  
    for (i = 0; i < person.length; i++) {}
  
  return Object.keys(person)
   
} */

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);