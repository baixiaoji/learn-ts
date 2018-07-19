
interface personObject{
    firstName: string,
    age?: number,
    [property: string]: any,
    greet(EnglishName: string):void,
}
function sayName(person: personObject): void {
    console.log(`Hello, I am ${person.firstName}`)
}

function changeName(person: personObject) {
    person.firstName = "baiji"
}
const Man: personObject = {
    firstName: "baixiaoji",
    age: 21,
    hobbies: ['reading', 'writring', 'coding'],
    skills: ['JavaScript', 'HTML', 'CSS'],
    greet(EnglishName: string){
        console.log(`Hi, my Chinese name is ${ this.firstName }, my English name is ${ EnglishName }!`)
    }
}
// 直接传入会有严格校验的
sayName({firstName: 'Kevin', greet(){}})
sayName(Man)
changeName(Man)
sayName(Man)
Man.greet("Future")

// about class
class aMan implements personObject{
    // firstName: string;
    constructor(public firstName: string){}
    greet(EnglishName: string):void{
        console.log(`Hi, my Chinese name is ${ this.firstName }, my English name is ${ EnglishName }!`)
    };
}

const newMan = new aMan('zoulijie')
// newMan.firstName = "zoulijie";
newMan.greet("Future")

// function types
interface addFn{
    (value1: number, value2: number): number;
}
let realAddFn: addFn;
realAddFn = (a: number, b:number):number => {
    return a + b;
}
console.log(realAddFn(758, 798))

// inherit interface
interface olderPerson extends personObject{
    age: number,
}
const CharmingMan: olderPerson = {
    firstName: '摩根·弗里曼',
    age: 80,
    greet(EnglishName: string){
        console.log(`Hi, my Chinese name is ${ this.firstName }, my English name is ${ EnglishName }!`)
    }
}
CharmingMan.greet("Morgan Freeman")