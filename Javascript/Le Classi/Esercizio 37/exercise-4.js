class BankAccount{

    constructor(valore) {
        this.valore = valore;
    }
    deposit(x) {
    return  this.valore += x
    }
    withdraw(x) {
       return this.valore -= x
    }
    view() {
        console.log(this.valore)
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();