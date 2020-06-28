"use strict";

function Account() {
  this.balance = 0;
  this.transactions = ["date || credit || debit || balance"]
}


Account.prototype.deposit = function (money) {
  this.balance += money
}

Account.prototype.withdraw = function (money) {
  this.balance -= money
}