"use strict";
var bankAccount = {
    moneny: 2000,
    deposit: function (value) {
        this.moneny += value;
    }
};
var myself = {
    name: 'baixiaoji',
    bankAccount: bankAccount,
    bobbies: ['reading', 'coding'],
};
myself.bankAccount.deposit(2000);
console.log(myself);
