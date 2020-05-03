'use strict'


//create a Account Class
class Account {
  //create a contractor with with account #, owner, Transactions
  constructor(accountNum, accOwner, transaction) {
    this.accountNum = accountNum;
    this.accOwner = accOwner;
    this.transaction = [];
  }
  //this method needs to return the sum of all the transactions
  balance() {

    const add = () => this.transaction.reduce((a, b) => a + b, 0);
    
    let sum = add(this.transaction);

    console.log(balance(sum))
  }

  deposit(amountDeposited) {
    if (amountDeposited ) {

    }
  }
  charge(payee, amountCharged){
    if ()
  }
}
class Transaction {
  constructor(amount ,payee) {
    this.date = new Date();
    this.amount = amount;
    this.payee = payee;
  }

}


//created Account Owner
let chrisAccount = new Account('454550', 'Christopher Trevino')
//console.log(chrisAccount) 
let target = new Transaction(50.50, 'Target')
console.log(target);

