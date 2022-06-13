// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  if( 'ceo' == role ){
    return 'lo stipendio del ceo è ' + 2200 +  " euro"
  }else if( 'manager' == role ){
    return 'lo stipendio del manager è ' + 1800 +  " euro"
  }else if( 'cto' == role ){
    return 'lo stipendio del cto è ' + 1800 + " euro"
  }else if( 'developer' == role ){
    return 'lo stipendio del developer è ' + 1500 + " euro"
  }else if( 'other' == role ){ 
   return 'lo stipendio del default è ' + 1000 + " euro"
  }
  
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);