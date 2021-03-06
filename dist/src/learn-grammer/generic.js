"use strict";
// simple generic
function echo(data) {
    return data;
}
console.log(echo("Baixiaoji"));
console.log(echo(22));
console.log(echo({ name: "Baixiaoji", age: 22 }));
// better generic
function BetterEcho(data) {
    return data;
}
console.log(BetterEcho("Baixiaoji").length);
console.log(BetterEcho(22));
console.log(BetterEcho({ name: "Baixiaoji", age: 22 }));
// build-in generic
const result = [8, 28];
result.push(1996);
// result.push("12")
console.log(result);
function printAll(args) {
    args.forEach(item => console.log(item));
}
printAll(['year', 'month', 'date']);
printAll([1996, 8, 28]);
const echo2 = BetterEcho;
console.log(echo2('baixiaoji'));
class AddClass {
    add() {
        return this.value1 + this.value2;
    }
}
const addClass = new AddClass();
addClass.value1 = "12";
addClass.value2 = "18";
console.log(addClass.add());
const addClass2 = new AddClass();
addClass2.value1 = 12;
addClass2.value2 = 18;
console.log(addClass2.add());
class MyMap {
    constructor() {
        this.map = {};
    }
    setItem(key, value) {
        this.map[key] = value;
    }
    getItem(key) {
        return this.map[key];
    }
    clear() {
        this.map = {};
    }
    printAll() {
        for (const key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}
const myMap = new MyMap();
myMap.setItem("name", "baixiaoji");
myMap.setItem("age", "22");
console.log(myMap.getItem("age"));
myMap.printAll();
myMap.clear();
myMap.printAll();
