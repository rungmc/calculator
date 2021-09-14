let memory = 0;
let display = '0';
const buttons = document.querySelectorAll('button');

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
}

function memRecall(){
    updateDisplay(memory);
}

function memPlus(num){
    memory += num;
}

function memMinus(num){
    memory -= num;
}

function plusMinus() {
    display = (parseFloat(display)*-1).toString();
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