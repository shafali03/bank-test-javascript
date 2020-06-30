# bank-test-javascript


Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).


Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00

```


## Results
```
account = new Account
Account { balance: 0, transactions: Array(1) }
account.balance
0
account.deposit(1000)

account.balance
1000
account.withdraw(200)

account.balance
800
account.withdraw(200)

account.balance
600
account.withdraw(300)

account.balance
300

account.withdraw(200)

account.balance
100

account.deposit(1000)

date || credit || debit || balance
30 / 6 / 2020 || 1000 || || 1100
30 / 6 / 2020 || || 200 || 100
30 / 6 / 2020 || || 300 || 300
30 / 6 / 2020 || || 200 || 600
30 / 6 / 2020 || || 200 || 800
30 / 6 / 2020 || 1000 || || 1000




```