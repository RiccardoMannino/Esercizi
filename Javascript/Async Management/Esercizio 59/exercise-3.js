const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      
      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`La Persona con id: ${id} non esiste`);
    }, 1000);
  });
}

// core here
fetchPersonById(4)
.then((person) => (JSON.parse(person))) // perchè usare una catena? 
.then((person) => console.log(person))  //quando si poteva fare in un'unica riga di codice?
.catch(error =>{
  console.log(error)
})
