/**
 * @params
 * array
 * size = 1
 */
function chunk<T>(a: T[], size: number = 1): T[] | T[][]{
    const time = Math.ceil(a.length / size);
    if (time === 1) {
        return a;
    }
    const array = [];
    for(let i = 0; i < time; i++){
        array.push(a.splice(0, size))
    }
    return array;
}

console.log(chunk([1,2,3], 3))
console.log(chunk([1,2,3,4], 2))
console.log(chunk([1,2,3,4], 3))
console.log(chunk([1,2,3,4], 1))
