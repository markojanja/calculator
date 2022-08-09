"use strict"

// Math functions

function add(x, y){
    if(!y){
        return x
    }
    return x+y
}

function subtract(x, y){
    if(!y){
        return x
    }
    return x-y
}

function divide(x, y){
    if(!y){
        return x
    }
    else if (x===0){
        return "Error"
    }
    return x/y
}

function multiply(x, y){
    if(!y){
        return x
    }
    return x*y
}
//operators object
const operators = {
    "+":add,
    "-":subtract,
    "/":divide,
    "*":multiply,  
}


// operate numbers

function operate(x, y, operator){
    switch(operator){
        case "+":
            return operators[operator](x, y)
        case "-":
            return operators[operator](x, y)
        case "/":
            return operators[operator](x, y)
        case "*":
            return operators[operator](x, y)
        case "=":
            return x
        default:
            return x    
    }
}
//update display 

function updateDisplay(){
    if(result === null){
        return display.textContent = "0";
    }
    return display.textContent = `${result}`
}


const numberBtns = document.querySelectorAll('.number-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
const display = document.querySelector('.display');


let userInput =  "";
let firstNumber;
let secondNumber;
let temp;
let operator;
let result=null;

function clearAll(){
    userInput ="";
    firstNumber;
    secondNumber;
    temp=null;
    operator = undefined;
    result = null;   
}

updateDisplay()
clearAll()
numberBtns.forEach(number=>{
    number.addEventListener('click',(e)=>{
        e.preventDefault()
        userInput+= e.target.innerText;
        if(number.innerText === "." && userInput.includes(".")){
            number.disabled = true;
        }
        temp = parseFloat(userInput);
        display.textContent = `${temp}`

        
        if(operator!==undefined){
            temp = parseFloat(userInput);

            result = operate(firstNumber, temp, operator);
            // console.log(operate(firstNumber, temp, operator))
            temp=result;
            // updateDisplay()
        } 
    })
})

operatorBtns.forEach(op=>{
    op.addEventListener('click', (e)=>{
        operator = e.target.innerText;
        display.textContent +=`${operator}`
        firstNumber = temp
        userInput ="";
        if(userInput === ""){
            numberBtns.forEach(n=> n.disabled = false)
        }
        secondNumber = parseFloat(userInput)
        // display.textContent+= firstNumber
        result = operate(firstNumber, secondNumber, operator);
        secondNumber=null;
        updateDisplay()
        if(operator==="="){
            updateDisplay()
        }
        else{
            display.textContent+= operator  
        }
         
    })
})

const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', ()=>{
    clearAll() 
    updateDisplay()
})
