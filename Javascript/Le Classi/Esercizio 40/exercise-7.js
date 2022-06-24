class Person {
  constructor(firstName, lastName,age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  }
  get age(){
    return this._age
  }
  set age(valore){
    this._age = valore;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`; 
  }
  set fullName(valore){
    this.firstName, this.lastName = valore;
  }
  
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName); 
/* console.log(person.fullName + ' ' + person.age) qualora volevamo concatenarla con l'age
oppure si sarebbe potuta settare l'age dentro il get fullName */

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);

