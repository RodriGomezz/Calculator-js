let display = document.getElementById(`display`);
let buttons = Array.from(document.getElementsByClassName('button'));
let number1 = ''
let operator = ''

buttons.map(button => {
    button.addEventListener('click', (e) => {

        switch (e.target.innerText) {
            case 'C':
                console.log(number1)
                display.value = ' ';
                number1= ''
                break;
            case 'CE':
                let lastIndex = number1.lastIndexOf(operator);
                number1 = number1.substring(lastIndex, -1);
                display.value = number1
                break;
            case 'DEL':
                number1= number1.slice(0, -1)
                display.value = number1;
                break;
            case '+':
                display.value = '+';
                number1 = eval(number1)
                number1 += '+';
                operator = '+';
                break;
            case '-':
                display.value = '-';
                number1 = eval(number1)
                number1 += '-';
                operator = '-';
                break;
            case 'x':
                display.value = 'x';
                number1 = eval(number1)
                number1 += '*';
                operator = '*';
                break;
            case '÷':
                display.value = '÷';
                number1 = eval(number1)
                number1 += '/';
                operator = '/';
                break;
            case 'x²':
                number1 = number1**2;
                display.value = number1;
                operator = 'x²';
                break;
            case '²√x':
                number1 = Math.sqrt(number1)
                display.value = number1;
                operator = '²√x';
                break;
            case '1/x':
                number1 = 1/number1;
                display.value = number1;
                operator = '1/x';
                break;
            case '%':
                display.value += '%';
                number1 += '/100'
                operator = '%';
                break;
            case '+/-':
                number1 = number1*-1
                display.value = number1;
                operator = '+/-';
                break;
            case '=':
                display.value = eval(number1);
                number1 = eval(number1);
                operator = '=';
                break;
            default:
                if ( operator === '=' || operator === 'x²' || operator === '²√x') {
                    operator = '';
                    number1 = '';
                    display.value = ''
                }
                number1 += e.target.innerText
                display.value += e.target.innerText;

        }
    });
});
