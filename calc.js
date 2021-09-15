let memory = 0;
let display = '0';
let storedDisplay = '';
let storedOperand = '';

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        //Simple animation trigger on click.
        button.classList.add('button-click');
        setTimeout(function(){button.classList.remove('button-click')},300);

        if(button.classList.contains('operator')){
            if(button.id == 'clear') clear();
            else if(button.id == 'ac') allClear();
            else if(button.id == 'off') turnOff();
            else if(button.id == 'neg') negative();
            else if(button.id == 'percent') percent();

            else if(button.id == 'mrc') memRecall();
            else if(button.id == 'mplus') memPlus();
            else if(button.id == 'mminus') memMinus();
        }
        else if(button.classList.contains('operand')){
            let operand = button.id;
            doMath(operand);
        }
        //Prevents user entry of double decimals.
        else if(button.id !== 'dec' || !display.includes('.')){
            if(display == '0' && button.id !== 'dec') display = '';
            display += button.innerText;
            updateDisplay();
        }
    });
});

function updateDisplay() {
    const displayScreen = document.querySelector('#display');
    
    //Scientific notation if number is too long for display.
    if(display.length > 10) displayScreen.innerText = parseFloat(display).toExponential(6);
    else displayScreen.innerText = display;
}

updateDisplay();

function doMath(operand = ''){
    //Prevent from storing equals signs, want that to immediately fire.
    if(!storedOperand && operand !== 'eq'){
        storedOperand = operand;
        storedDisplay = display;
        display = '';
    }
    else{
        if(storedOperand == 'plus'){
            storedDisplay = (parseFloat(storedDisplay) + parseFloat(display)).toString();
        }
        else if(storedOperand == 'minus'){
            storedDisplay = (parseFloat(storedDisplay) - parseFloat(display)).toString();
        }
        else if(storedOperand == 'times'){
            storedDisplay = (parseFloat(storedDisplay) * parseFloat(display)).toString();
        }
        else if(storedOperand == 'divide'){
            storedDisplay = (parseFloat(storedDisplay) / parseFloat(display)).toString();
        }

        display = storedDisplay;
        updateDisplay();
        if(operand == 'eq'){
            storedOperand = '';
        }
        else{
            storedOperand = operand;
            display = '';
        }
    }
}

function percent(){
    display = (parseFloat(display)*0.01).toString();
    updateDisplay();
}

function memRecall(){
    display = memory.toString();
    updateDisplay();
}

function memPlus(){
    memory += parseFloat(display);
}

function memMinus(){
    memory -= parseFloat(display);
}

function negative() {
    display = (parseFloat(display)*-1).toString();
    updateDisplay();
}

function clear() {
    storedDisplay = '';
    storedOperand = '';
    display = '0';
    updateDisplay();
}

function allClear() {
    memory = 0;
    clear();
}

function turnOff() {
    allClear();
    display = '';
    updateDisplay();
}