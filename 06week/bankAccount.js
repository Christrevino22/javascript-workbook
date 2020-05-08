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
    let payee = this.accOwner
    //if we are just pushing in the account.
  this.transactions.push(new Transaction(amountDeposited, payee))
  }
  charge(transaction){
    if (this.balance() <= 0 || this.balance() < this.amount || this.balance() === 'this is a new account, a deposit has not yet been made') {
      return 'insufficient funds'
    } else {
    return this.transactions.push(transaction)
  }
}}
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
let accountTwo = new Account('454540', 'Hitzel Betts')
let gus = new Transaction(-54.56, 'gus chicken')
let target = new Transaction(-204.59, 'target')


/ console.log(gus)
accountOne.deposit(1200)
//accountOne .balance()
//console.log(AccountOne)
accountOne.charge(gus)
accountOne.charge(target)
// console.log(accountOne)
console.log(accountOne.balance())

console.log(accountTwo.balance())
// console.log()