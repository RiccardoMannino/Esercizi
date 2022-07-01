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
  return new Promise(function(resolve, reject) {
    setTimeout(() =>{
    resolve(persons.find(person => person.id === id))
   },3000); // possiamo farla anche senza setTimeout
 })
}

let persone = fetchPersonById(2);// inserendo come parametro della funzione il numero dell'id 
persone                          // ritorneremo l'oggetto con tutte le sue proprietà id compreso
.then((id) => {
  console.log(id)
})


  


// code here