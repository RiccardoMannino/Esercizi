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

      return reject(`La persona con id: ${id} non esiste`);
    }, 1000);
  });
}

async function fetchPerson(){
  try {
    const personJson = await fetchPersonById(3) // il valore dell'id va messo qui
    console.log(JSON.parse(personJson))
  }catch (err) {
    console.error(err);
 }
}
console.log(fetchPerson()) // non qui


/* fetchPersonById(2)
  .then((personJson) => JSON.parse(personJson))
  .then((person) => console.log(person))
  .catch((err) => console.error(err));
*/