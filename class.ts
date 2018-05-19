// Exercise 1
class Car{
    name: string;
    public acceleration: number = 0;

    constructor(name: string){
        this.name = name;
    }
    
    honk(): void{
        console.log("Toooooooooot!");
    }
    accelerate(speed: number):void{
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
class BaseObject{
    public width: number = 0;
    public length: number = 0;
}
class Rectangle extends BaseObject{
    calcSize():number{
        return this.width * this.length
    }
}
const rectangle = new Rectangle()
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());

// Exercise 3
class Person{
    private _firstName: string = '';
    get firstName(){
        return this._firstName;
    }
    set firstName(value: string){
        if (value.length > 3){
            this._firstName = value;
        }else {
            this._firstName = '';
        }
    }
}
const person = new Person()
console.log(person.firstName);
person.firstName = "HA";
console.log(person.firstName);
person.firstName = "Baixiaoji";
console.log(person.firstName);

