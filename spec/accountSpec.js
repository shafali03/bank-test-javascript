"use strict"


describe('Account', () => {
  let account




  it('should have a starting balance of £0', () => {
    account = new Account
    expect(account.balance).toEqual(0)
  })
})
