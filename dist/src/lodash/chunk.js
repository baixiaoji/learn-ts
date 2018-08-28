"use strict";
/**
 * @params
 * array
 * size = 1
 */
function chunk(a, size = 1) {
    const time = Math.ceil(a.length / size);
    const array = [];
    for (let i = 0; i < time; i++) {
        array.push(a.splice(0, size));
    }
    return array;
}
// console.log(chunk<number>([1,2,3], 3))
// console.log(chunk([1,2,3,4], 2))
console.log(chunk([1, 2, '3', 4], 3));
// console.log(chunk([1,2,3,4], 1))
const a = ['1', '2', '3'];
