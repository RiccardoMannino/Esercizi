const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};
// altro modo per risolvere
/* function togliPersone(key,value){
  if(typeof value !== "string"){
    return value;
 }
} */

const json = JSON.stringify(person,["id","age"]);

console.log(json); // Should return: { id: 1, age: 25 }