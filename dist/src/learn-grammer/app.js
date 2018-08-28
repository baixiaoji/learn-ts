"use strict";
// string
let myName = 'baixiaoji';
// myName = 22;
let myAge = 22;
// myAge = '22';
let isMan = true;
// isMan = 1;
let skills = ["web", "writing"];
// skills = [1,2,3]
// tuples
let carInfo = ['BMW', 0];
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Gray"] = 110] = "Gray";
    Color[Color["Black"] = 2] = "Black";
})(Color || (Color = {}));
let myColor = Color.Black;
console.log(myColor);
function returnMyName() {
    return myName;
}
console.log('函数有返回值', returnMyName());
function sayBye() {
    console.log('Bye~');
    // return undefined;
}
console.log('函数无返回值', sayBye());
function addTwoNumber(a, b) {
    return a + b;
}
console.log('函数参数', addTwoNumber(12, 23));
// function types
let myFn;
// myFn = sayBye
// myFn()
myFn = addTwoNumber;
console.log(myFn(12, 18));
let userData = {
    name: 'baixiaoji',
    age: 21,
};
console.log(userData);
let complex = {
    data: [12, 12, 23, 34],
    output(all) {
        return this.data;
    }
};
console.log(complex);
let complex2 = {
    data: [12, 32, 12],
    output(all) {
        return this.data;
    }
};
// union type
let myRealAge = 21;
myRealAge = '21';
// never
function throwError() {
    throw new Error("An Error!");
}
;
throwError();
