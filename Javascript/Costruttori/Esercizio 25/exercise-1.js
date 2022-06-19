const person = {
   
    get fullName() {
     return `${this.firstName} ${this.lastName}`; 
    },
    set fullName(value){
        [this.firstName, this.lastName] = value;
    },
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}
let john = Object.create(person);
john.firstName = 'John'; john.lastName = 'Doe';

let simon = Object.create(person);
simon.firstName = 'Simon'; simon.lastName = 'Collins'

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins