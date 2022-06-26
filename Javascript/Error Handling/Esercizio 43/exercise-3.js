class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError("L'importo fornito non può essere negativo"); // Use custom Error class
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new NegativeAmountError("L'importo fornito non può essere negativo"); // Use custom Error classError class
    }

    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError('Non puoi prelevare più del saldo presente nel conto'); // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}
class NegativeAmountError extends Error {
    constructor(message) {
      super(message)
      this.name = 'NegativeAmountError';
    }
}

class WithdrawNotPermittedError extends Error {
    constructor(message) {
      super(message)
      this.name = 'WithdrawNotPermittedError';
    }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (error) {
  if (error instanceof WithdrawNotPermittedError) {
    console.log("Operazione impossibile: " + error.message);
  }
  else{
    console.log("Operazione impossibile: " + error.message);
  }
}