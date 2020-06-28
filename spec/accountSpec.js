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
})