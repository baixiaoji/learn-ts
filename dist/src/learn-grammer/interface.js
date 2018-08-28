"use strict";
function sayName(person) {
    console.log(`Hello, I am ${person.firstName}`);
}
function changeName(person) {
    person.firstName = "baiji";
}
const Man = {
    firstName: "baixiaoji",
    age: 21,
    hobbies: ['reading', 'writring', 'coding'],
    skills: ['JavaScript', 'HTML', 'CSS'],
    greet(EnglishName) {
        console.log(`Hi, my Chinese name is ${this.firstName}, my English name is ${EnglishName}!`);
    }
};
// 直接传入会有严格校验的
sayName({ firstName: 'Kevin', greet() { } });
sayName(Man);
changeName(Man);
sayName(Man);
Man.greet("Future");
// about class
class aMan {
    // firstName: string;
    constructor(firstName) {
        this.firstName = firstName;
    }
    greet(EnglishName) {
        console.log(`Hi, my Chinese name is ${this.firstName}, my English name is ${EnglishName}!`);
    }
    ;
}
const newMan = new aMan('zoulijie');
// newMan.firstName = "zoulijie";
newMan.greet("Future");
let realAddFn;
realAddFn = (a, b) => {
    return a + b;
};
console.log(realAddFn(758, 798));
const CharmingMan = {
    firstName: '摩根·弗里曼',
    age: 80,
    greet(EnglishName) {
        console.log(`Hi, my Chinese name is ${this.firstName}, my English name is ${EnglishName}!`);
    }
};
CharmingMan.greet("Morgan Freeman");
