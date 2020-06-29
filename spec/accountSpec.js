"use strict"


describe('Account', () => {
  let account

  it('should have a starting balance of £0', () => {
    account = new Account
    expect(account.balance).toEqual(0)
  })


  it('should increase balance £1000', () => {
    account = new Account
    account.deposit(1000)
    expect(account.balance).toEqual(1000)
  })


  it('should decrease balance £500', () => {
    account = new Account
    account.deposit(1000)
    account.withdraw(500)
    expect(account.balance).toEqual(500)
  })

  it('can deposit many times from account ', () => {
    account = new Account
    account.deposit(1000)
    account.deposit(100)
    account.deposit(200)
    account.deposit(300)
    expect(account.balance).toEqual(1600)
  })


  it('can deposit and withdraw from account ', () => {
    account = new Account
    account.deposit(1000)
    account.withdraw(100)
    account.withdraw(500)
    account.withdraw(300)
    account.deposit(1400)
    expect(account.balance).toEqual(1500)
  })


  describe('account statement', () => {

    it('should display one deposit', () => {
      account = new Account
      account.deposit(100)
      expect(account.transactions.length).toEqual(2)
    })

    it('should display deposit transaction', () => {
      account = new Account
      account.deposit(1000)
      expect(account.transactions).toEqual(["date || credit || debit || balance", `${date} || 1000 || || 1000`])
    })

    it('should display a withdraw transaction', () => {
      account = new Account
      account.deposit(1000)
      account.withdraw(200)
      expect(account.transactions).toEqual(["date || credit || debit || balance", `${date} || || 200 || 800`, `${date} || 1000 || || 1000`])
    })
  })


})