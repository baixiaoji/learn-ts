"use strict";
let bankAccount = {
    moneny: 2000,
    deposit(value) {
        this.moneny += value;
    }
};
let myself = {
    name: 'baixiaoji',
    bankAccount: bankAccount,
    bobbies: ['reading', 'coding'],
};
myself.bankAccount.deposit(2000);
console.log(myself);
