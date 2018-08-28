var Calculator = /** @class */ (function () {
    function Calculator() {
        this.createCalculatorWrapper();
        this.createCalculatorResult();
        this.createAllCalculatorButton();
        this.bindEvent();
    }
    Calculator.prototype.createButton = function (text, container) {
        var button = document.createElement('button');
        button.textContent = text;
        button.className = "button text-" + text;
        container.appendChild(button);
    };
    Calculator.prototype.createCalculatorWrapper = function () {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('calculator');
        document.body.appendChild(this.wrapper);
    };
    Calculator.prototype.createCalculatorResult = function () {
        this.output = document.createElement('div');
        this.output.classList.add('output');
        this.output.textContent = '0';
        this.wrapper.appendChild(this.output);
    };
    Calculator.prototype.createAllCalculatorButton = function () {
        var _this = this;
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
                _this.createButton(string, div);
            });
            _this.wrapper.appendChild(div);
        });
    };
    Calculator.prototype.bindEvent = function () {
        var _this = this;
        this.wrapper.addEventListener('click', function (e) {
            if (e.target instanceof HTMLButtonElement) {
                var target = e.target;
                var content = '';
                if (target.textContent) {
                    content = target.textContent;
                }
                // const content = <string>target.textContent;
                if ('1234567890.'.indexOf(content) >= 0) {
                    if (_this.operator) {
                        if (_this.n2) {
                            _this.n2 = _this.n2 + content;
                        }
                        else {
                            _this.n2 = content;
                        }
                        _this.output.textContent = _this.n2.toString();
                        return;
                    }
                    if (_this.n1) {
                        _this.n1 = _this.n1 + content;
                    }
                    else {
                        _this.n1 = content;
                    }
                    _this.output.textContent = _this.n1.toString();
                }
                else if ('÷×-+'.indexOf(content) >= 0) {
                    _this.operator = content;
                }
                else if ('='.indexOf(content) >= 0) {
                    var finalResult = 0;
                    switch (_this.operator) {
                        case '-':
                            finalResult = parseFloat(_this.n1) - parseFloat(_this.n2);
                            break;
                        case '+':
                            finalResult = parseFloat(_this.n1) + parseFloat(_this.n2);
                            break;
                        case '÷':
                            finalResult = parseFloat(_this.n1) / parseFloat(_this.n2);
                            break;
                        case '×':
                            finalResult = parseFloat(_this.n1) * parseFloat(_this.n2);
                            break;
                    }
                    _this.result = finalResult.toFixed(2).toString();
                    _this.output.textContent = _this.result;
                }
                else if ('Clear'.indexOf(content) >= 0) {
                    _this.n1 = null;
                    _this.n2 = null;
                    _this.operator = null;
                    _this.output.textContent = '0';
                }
            }
        });
    };
    return Calculator;
}());
new Calculator();
