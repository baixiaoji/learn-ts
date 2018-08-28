#!/usr/bin/env ts-node
"use strict";
{
    const num1 = parseInt(process.argv[2], 10);
    const num2 = parseInt(process.argv[3], 10);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        console.log('请输入数字');
        process.exit(1);
    }
    console.log(num1 - num2);
}
