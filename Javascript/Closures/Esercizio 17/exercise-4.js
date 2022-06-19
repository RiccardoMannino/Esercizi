function calculate() {
  let numero = 0;
  return operazioni = {
    add :function somma(num) {
         numero += num ;
        return this ;
    },
    multiply : function moltiplicazione(num){
        numero *= num ;
        return this ;
    },
    sub: function sottrazione(num){
        numero -= num ;
        return this ;
    },
    divide: function divisione(num){
        numero /= num ;
        return this;
    },
    printResult(){
    console.log((numero));
    }
 }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7