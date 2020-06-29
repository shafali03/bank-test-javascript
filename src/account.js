"use strict";

function Account() {
  this.balance = 0;
  this.transactions = ["date || credit || debit || balance"]
}

const todayDate = new Date();
var date = (`${todayDate.getDate()}/${todayDate.getMonth() + 1}/${todayDate.getFullYear()}`
)

Account.prototype.deposit = function (money) {
  this.balance += money
  var record = `${date} || ${money} || || ${this.balance}`
  this.transactions.splice(1, 0, record)
}

Account.prototype.withdraw = function (money) {
  this.balance -= money
  var record = `${date} || || ${money} || ${this.balance}`
  this.transactions.splice(1, 0, record)
}
