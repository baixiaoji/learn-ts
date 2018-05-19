// Exercise 1
// var double = function(value) {
//     return value * 2;
// };

const  double = (value: number) => value * 2;
console.log(double(10));
// Exercise 2
// var greet = function (name) {
//     if (name === undefined) { name = "Max"; }
//     console.log("Hello, " + name);
// };
const greet = (name: string = 'baixiaoji'):void => {
    console.log(`Hello, ${name}`);
}
greet();
greet("Anna");

// Exercise 3
const numbers = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbers));
console.log(Math.min(...numbers));
// Exercise 4
const newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
newArray.push(...numbers);
console.log(newArray);

// Exercise 5
const testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2gst = testResults[1];
// var result3 = testResults[2];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6
const scientist = {firstName: "Will", experience: 12};
// var firstName = scientist.firstName;
// var experience = scientist.experience;
const {firstName, experience} = scientist;
console.log(firstName, experience);console.log(firstName, experience);