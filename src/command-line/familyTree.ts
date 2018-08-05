#!/usr/bin/env ts-node
{
    function createTabs(n: number): string {
        return '----'.repeat(n);
    }
    class Person {
        private _array: Person[] = [];
        constructor(public name: string) {}

        add(son: Person):void {
            this._array.push(son);
        }

        print(n?: number):void {
            n = n || 0;
            console.log(`${createTabs(n)}${this.name}`)
            this._array.forEach(son => {
                son.print( n + 1);
            })
        }
    }

    const grandPa = new Person('Big Dad');
    const father = new Person('Dad');
    const son = new Person('son');
    grandPa.add(father);
    father.add(son)
    grandPa.print()
}
