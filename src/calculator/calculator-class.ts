class Calculator {
    private wrapper: HTMLDivElement;
    private output: HTMLDivElement;
    private n1: string;
    private n2: string;
    private operator: string;
    private result: string;

    constructor() {
        this.createCalculatorWrapper();
        this.createCalculatorResult();
        this.createAllCalculatorButton();
        this.bindEvent();
    }

    createButton(text: string, container: HTMLElement) {
        let button: HTMLButtonElement = document.createElement('button');
        button.textContent = text;
        button.className = `button text-${text}`
        container.appendChild(button);
    }
    createCalculatorWrapper(): void {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('calculator');
        document.body.appendChild(this.wrapper);
    }
    createCalculatorResult(): void {
        this.output = document.createElement('div');
        this.output.classList.add('output');
        this.output.textContent = '0'
        this.wrapper.appendChild(this.output);
    }
    createAllCalculatorButton(): void {
        const textArray: string[][] = [
            ['Clear', '÷'],
            ['7', '8', '9', '×'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '+'],
            ['0', '.', '='],
        ];
        textArray.forEach((group: string[]) => {
            const div: HTMLDivElement = document.createElement('div');
            div.classList.add('row');
            group.forEach(string => {
                this.createButton(string, div);
            })
            this.wrapper.appendChild(div);
        });
    }
    bindEvent() {
        this.wrapper.addEventListener('click', (e) => {
            if (e.target instanceof HTMLButtonElement) {
                const target: HTMLButtonElement = e.target;
                let content: string = '';
                if (target.textContent) {
                    content = target.textContent
                }
                // const content = <string>target.textContent;
                if ('1234567890.'.indexOf(content) >= 0) {
                    if (this.operator) {
                        if (this.n2) {
                            this.n2 = this.n2 + content
                        } else {
                            this.n2 = content;
                        }
                        this.output.textContent = this.n2.toString();
                        return;
                    }
                    if (this.n1) {
                        this.n1 = this.n1 + content
                    } else {
                        this.n1 = content;
                    }
                    this.output.textContent = this.n1.toString();
                } else if ('÷×-+'.indexOf(content) >= 0) {
                    this.operator = content;
                } else if ('='.indexOf(content) >= 0) {
                    let finalResult: number = 0;
                    switch (this.operator) {
                        case '-':
                            finalResult = parseFloat(this.n1) - parseFloat(this.n2);
                            break;
                        case '+':
                            finalResult = parseFloat(this.n1) + parseFloat(this.n2);
                            break;
                        case '÷':
                            finalResult = parseFloat(this.n1) / parseFloat(this.n2);
                            break;
                        case '×':
                            finalResult = parseFloat(this.n1) * parseFloat(this.n2);
                            break;
                    }
                    this.result = finalResult.toFixed(2).toString();
                    this.output.textContent = this.result;
                } else if ('Clear'.indexOf(content) >= 0) {
                    this.n1 = null;
                    this.n2 = null;
                    this.operator = null;
                    this.output.textContent = '0';
                }
            }
        })
    }
}
new Calculator();