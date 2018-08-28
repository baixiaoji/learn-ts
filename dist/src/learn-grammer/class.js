"use strict";
// Exercise 1
class Car {
    constructor(name) {
        this.acceleration = 0;
        this.name = name;
    }
    honk() {
        console.log("Toooooooooot!");
    }
    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2
class BaseObject {
    constructor() {
        this.width = 0;
        this.length = 0;
    }
}
class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());
// Exercise 3
class Person {
    constructor() {
        this._firstName = '';
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = '';
        }
    }
}
const person = new Person();
console.log(person.firstName);
person.firstName = "HA";
console.log(person.firstName);
person.firstName = "Baixiaoji";
console.log(person.firstName);
