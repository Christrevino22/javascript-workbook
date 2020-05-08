'use strict'


//create a Account Class
class Account {
  //create a contractor with with account #, owner, Transactions
  constructor(accountNum, accOwner, transactions) {
    this.accountNum = accountNum;
    this.accOwner = accOwner;
    this.transactions = [];
  }
  //this method needs to return the sum of all the transactions
  balance() {
    let balanceOf = this.transactions.reduce(function(a, b){
      return a + b;
  });
  
  console.log(sum); // Hopefully this will print out the sum
    
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
let accountOne = new Account('454550', 'Christopher Trevino')
//console.log(chrisAccount) 
let transactionOne = new Transaction(50.50, 'Target')
console.log(target);

