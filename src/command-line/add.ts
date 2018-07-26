#!/usr/bin/env ts-node
// const arg: string[] = process.argv;
const num1: number = parseInt(process.argv[2], 10);
const num2: number = parseInt(process.argv[3], 10);

if(Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log('请输入数字');
    process.exit(1);
}
console.log(num1 + num2)
