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

function updateDisplay(result){
    if(result === null){
        return display.textContent = "0";
    }
    return display.textContent = `${result}`
}


const numberBtns = document.querySelectorAll('.number-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
// console.log(numberBtns, operatorBtns);
const display = document.querySelector('.display');

let numbers = [];
let userInput =  "";
let firstNumber;
let secondNumber;
let temp;
let operator;

let result=null;

function clearAll(){
    numbers = [];
    userInput =  "";
    firstNumber;
    secondNumber;
    temp;
    operator = undefined;
    result = 0;
    updateDisplay(result)
    
}

updateDisplay(result)
numberBtns.forEach(number=>{
    number.addEventListener('click',(e)=>{
        userInput+= e.target.innerText;
        if(number.innerText === "." && userInput.includes(".")){
            number.disabled = true;
        }
 
        temp = parseFloat(userInput);
        display.textContent = userInput
        if(operator!==undefined){
            console.log(operate(firstNumber, temp, operator));
            numbers[0] = operate(firstNumber, temp, operator);
            console.log(display.textContent)
            result = numbers[0]
            // updateDisplay(result)
            temp=null;
            
        } 
    })
})

operatorBtns.forEach(op=>{
    op.addEventListener('click', (e)=>{
        operator = e.target.innerText;
        console.log(operator)
        numbers.push(temp);
        firstNumber = numbers[0];
        console.log(numbers)
        userInput ="";
        if(userInput === ""){
            numberBtns.forEach(n=> n.disabled = false)
        }
        if(numbers.length<2){
            return
        }
        
        secondNumber = numbers[1];

        numbers[0] = operate(firstNumber, secondNumber, operator);
        result = numbers[0]
        
        updateDisplay(numbers[0])
        numbers.splice(-1);
        secondNumber=null;
        console.log(numbers)
        
        
    })
})

const clearBtn = document.querySelector('.clear-btn');
console.log(clearBtn)

clearBtn.addEventListener('click', ()=>{
    clearAll() 
    updateDisplay(result)
})
