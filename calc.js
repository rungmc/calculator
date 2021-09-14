let memory = 0;
let display = '80085';

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        //Simple animation trigger on click.
        button.classList.add('button-click');
        setTimeout(function(){button.classList.remove('button-click')},300);

        if(button.id == 'clear') clear();
        else if(button.id == 'ac') allClear();
        else if(button.id == 'off') turnOff();
        else if(button.id == 'neg') negative();
        else if(button.id == 'percent') percent();

        else if(button.id == 'mrc') memRecall();
        else if(button.id == 'mplus') memPlus();
        else if(button.id == 'mminus') memMinus();
    });
});

function updateDisplay() {
    const displayScreen = document.querySelector('#display');
    if(display.length > 10) displayScreen.innerText = display.substring(0,9)+'...';
    else displayScreen.innerText = display;
}

updateDisplay();



function equals(){

}

function add(num1, num2){
    display = num1+num2;
    updateDisplay();
}

function subtract(num1, num2){
    display = num1-num2;
    updateDisplay();
}

function multiply(num1, num2){
    display = num1*num2;
    updateDisplay();
}

function divide(num1, num2){

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
    display = '0';
    updateDisplay();
}

function allClear() {
    memory = 0;
    clear();
}

function turnOff() {
    memory = 0;
    display = '';
    updateDisplay();
}