"use strict";
function sayName(person) {
    console.log("Hello, I am " + person.firstName);
}
function changeName(person) {
    person.firstName = "baiji";
}
var Man = {
    firstName: "baixiaoji",
    age: 21,
    hobbies: ['reading', 'writring', 'coding'],
    skills: ['JavaScript', 'HTML', 'CSS'],
    greet: function (EnglishName) {
        console.log("Hi, my Chinese name is " + this.firstName + ", my English name is " + EnglishName + "!");
    }
};
// 直接传入会有严格校验的
sayName({ firstName: 'Kevin', greet: function () { } });
sayName(Man);
changeName(Man);
sayName(Man);
Man.greet("Future");
// about class
var aMan = /** @class */ (function () {
    // firstName: string;
    function aMan(firstName) {
        this.firstName = firstName;
    }
    aMan.prototype.greet = function (EnglishName) {
        console.log("Hi, my Chinese name is " + this.firstName + ", my English name is " + EnglishName + "!");
    };
    ;
    return aMan;
}());
var newMan = new aMan('zoulijie');
// newMan.firstName = "zoulijie";
newMan.greet("Future");
var realAddFn;
realAddFn = function (a, b) {
    return a + b;
};
console.log(realAddFn(758, 798));
var CharmingMan = {
    firstName: '摩根·弗里曼',
    age: 80,
    greet: function (EnglishName) {
        console.log("Hi, my Chinese name is " + this.firstName + ", my English name is " + EnglishName + "!");
    }
};
CharmingMan.greet("Morgan Freeman");
