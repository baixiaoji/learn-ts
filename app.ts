// string
let myName: string = 'baixiaoji';
// myName = 22;

let myAge: number = 22;
// myAge = '22';

let isMan: boolean = true;
// isMan = 1;

let skills: string[] = ["web", "writing"];
// skills = [1,2,3]
// tuples
let carInfo: [string, number] = ['BMW', 0];

enum Color{
    Green, // 0
    Gray = 110, // 1
    Black = 2, // 2
}
let myColor: Color = Color.Black;
console.log(myColor)

function returnMyName(): string {
    return myName
}
console.log('函数有返回值', returnMyName())

function sayBye(): void {
    console.log('Bye~')
    // return undefined;
}
console.log('函数无返回值', sayBye());

function addTwoNumber(a: number, b: number): number{
    return  a + b;
}
console.log('函数参数', addTwoNumber(12, 23))

// function types
let myFn: (a: number, b:number) => number;
// myFn = sayBye
// myFn()
myFn = addTwoNumber
console.log(myFn(12, 18))

let userData: { name: string, age: number } = {
    name: 'baixiaoji',
    age: 21,
}
console.log(userData)

let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [12, 12, 23, 34],
    output(all){
        return this.data;
    }
}
console.log(complex);

//type alias
type Complex = {data: number[], output: (all: boolean) => number[]}

let complex2: Complex = {
    data: [12,32,12],
    output(all){
        return this.data;
    }
}

// union type
let myRealAge: number | string = 21
myRealAge = '21'

// never
function throwError(): never{
    throw new Error("An Error!")
};
throwError()