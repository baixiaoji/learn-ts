{
    // 创建 button
    function createButton(text: string, container: HTMLElement) {
        let button: HTMLButtonElement = document.createElement('button');
        button.textContent = text;
        button.className = `button text-${text}`
        container.appendChild(button);
    }
    // 创建calculator容器
    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.classList.add('calculator');
    document.body.appendChild(wrapper);
    // 创建输出
    const output: HTMLDivElement = document.createElement('div');
    output.classList.add('output');
    output.textContent = '0'
    wrapper.appendChild(output);
    // 生成 计算机的组件
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
    // 计算值 
    let n1: string;
    let n2: string;
    let operator: string;
    let result: string;
    // 绑定事件
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
            } else if ('÷×-+'.indexOf(content) >= 0) {
                operator = content;
            } else if ('='.indexOf(content) >= 0) {
                console.log(n1, operator, n2);
                let finalResult: number = 0;
                switch (operator) {
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
                result = finalResult.toFixed(2).toString();
                output.textContent = result;
            } else if ('Clear'.indexOf(content) >= 0) {
                n1 = null;
                n2 = null;
                operator = null;
                output.textContent = '0';
            }
        }
    })

}