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
      const person = persons.find(item => item.id === id);
      resolve(person)
  })
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
      const job = jobs.find(item => item.id === id);
      resolve(job)
  })
}

Promise.race([
  new Promise (resolve => setTimeout(() => resolve(fetchPersonById(2)) ,1000)),
  new Promise (resolve => setTimeout(()=> resolve(fetchJobById(2)) ,500))
]).then(console.log)

