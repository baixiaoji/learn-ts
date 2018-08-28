{
    // 创建 button
    function createButton(text, container) {
        var button = document.createElement('button');
        button.textContent = text;
        button.className = "button text-" + text;
        container.appendChild(button);
    }
    // 创建calculator容器
    var wrapper_1 = document.createElement('div');
    wrapper_1.classList.add('calculator');
    document.body.appendChild(wrapper_1);
    // 创建输出
    var output_1 = document.createElement('div');
    output_1.classList.add('output');
    output_1.textContent = '0';
    wrapper_1.appendChild(output_1);
    // 生成 计算机的组件
    var textArray = [
        ['Clear', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
    ];
    textArray.forEach(function (group) {
        var div = document.createElement('div');
        div.classList.add('row');
        group.forEach(function (string) {
            createButton(string, div);
        });
        wrapper_1.appendChild(div);
    });
    // 计算值 
    var n1_1;
    var n2_1;
    var operator_1;
    var result_1;
    // 绑定事件
    wrapper_1.addEventListener('click', function (e) {
        if (e.target instanceof HTMLButtonElement) {
            var target = e.target;
            var content = '';
            if (target.textContent) {
                content = target.textContent;
            }
            // const content = <string>target.textContent;
            if ('1234567890.'.indexOf(content) >= 0) {
                if (operator_1) {
                    if (n2_1) {
                        n2_1 = n2_1 + content;
                    }
                    else {
                        n2_1 = content;
                    }
                    output_1.textContent = n2_1.toString();
                    return;
                }
                if (n1_1) {
                    n1_1 = n1_1 + content;
                }
                else {
                    n1_1 = content;
                }
                output_1.textContent = n1_1.toString();
            }
            else if ('÷×-+'.indexOf(content) >= 0) {
                operator_1 = content;
            }
            else if ('='.indexOf(content) >= 0) {
                console.log(n1_1, operator_1, n2_1);
                var finalResult = 0;
                switch (operator_1) {
                    case '-':
                        finalResult = parseFloat(n1_1) - parseFloat(n2_1);
                        break;
                    case '+':
                        finalResult = parseFloat(n1_1) + parseFloat(n2_1);
                        break;
                    case '÷':
                        finalResult = parseFloat(n1_1) / parseFloat(n2_1);
                        break;
                    case '×':
                        finalResult = parseFloat(n1_1) * parseFloat(n2_1);
                        break;
                }
                result_1 = finalResult.toFixed(2).toString();
                output_1.textContent = result_1;
            }
            else if ('Clear'.indexOf(content) >= 0) {
                n1_1 = null;
                n2_1 = null;
                operator_1 = null;
                output_1.textContent = '0';
            }
        }
    });
}
