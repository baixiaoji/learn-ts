#!/usr/bin/env ts-node
{
    const a: number = parseInt(process.argv[2], 10);
    const b: number = parseInt(process.argv[3], 10);

    if(Number.isNaN(a) || Number.isNaN(b)){
        console.log('请输入合法数字');
        process.exit(1)
    }

    console.log(a * b);
}