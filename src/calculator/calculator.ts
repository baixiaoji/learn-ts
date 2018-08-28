{
    function createButton(text: string, container: HTMLElement) {
        let button: HTMLButtonElement = document.createElement('button');
        button.textContent = text;
        button.className = `button text-${text}`
        container.appendChild(button);
    }
    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.classList.add('calculator');
    document.body.appendChild(wrapper);
    const output: HTMLDivElement = document.createElement('div');
    output.classList.add('output');
    output.textContent = '0'
    wrapper.appendChild(output);
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
            createButton(string, div);
        })
        wrapper.appendChild(div);
    });
    let n1: string;
    let n2: string;
    let operator: string;
    let result: string;
    wrapper.addEventListener('click', (e) => {
        if (e.target instanceof HTMLButtonElement) {
            const target: HTMLButtonElement = e.target;
            let content: string = '';
            if (target.textContent) {
                content = target.textContent
            }
            // const content = <string>target.textContent;
            if ('1234567890.'.indexOf(content) >= 0) {
                if (operator) {
                    if (n2) {
                        n2 = n2 + content
                    } else {
                        n2 = content;
                    }
                    output.textContent = n2.toString();
                    return;
                }
                if (n1) {
                    n1 = n1 + content
                } else {
                    n1 = content;
                }
                output.textContent = n1.toString();
            } else if ('÷×-+'.indexOf(content) >= 0){
                operator = content;
            } else if ('='.indexOf(content) >= 0) {
                console.log(n1, operator, n2);
                let finalResult: number = 0;
                switch(operator) {
                    case '-': 
                    finalResult = parseFloat(n1) - parseFloat(n2);
                    break;
                    case '+':
                    finalResult = parseFloat(n1) + parseFloat(n2);
                    break;
                    case '÷':
                    finalResult = parseFloat(n1) / parseFloat(n2);
                    break;
                    case '×':
                    finalResult = parseFloat(n1) * parseFloat(n2);
                    break;
                }
                result = finalResult.toString();
                output.textContent = result;
            }
        }
    })

}