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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      resolve(person)
      
    }, 1000)
  })
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find(item => item.id === id);
      resolve(job)
      
    }, 1000)
  })
}

Promise.all([
  new Promise (resolve => setTimeout(() => resolve(fetchPersonById(1)) ,2000)),
  new Promise (resolve => setTimeout(()=> resolve(fetchJobById(2)) ,3000))
]).then(console.log)

/* Qualora non inserissimo i valori
all'interno delle rispettive funzioni riceveremo
come risultato [undefined undefined] */