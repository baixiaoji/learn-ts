type BankAccount = {
    moneny: number,
    deposit: (a: number) => void;
}

let bankAccount: BankAccount = {
    moneny: 2000,
    deposit(value){
        this.moneny += value;
    }
}

type MySelf = {
    name: string,
    bankAccount: BankAccount,
    bobbies: string[],
}

let myself: MySelf = {
    name: 'baixiaoji',
    bankAccount: bankAccount,
    bobbies: ['reading', 'coding'],
}

myself.bankAccount.deposit(2000);

console.log(myself)