"use strict";
// Math functions

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function divide(x, y) {
  return x / y;
}

function multiply(x, y) {
  return x * y;
}

function power(x, y) {
  if (!y) {
    return x;
  }
  return x ** y;
}
//operators object
const operators = {
  "+": add,
  "-": subtract,
  "/": divide,
  "*": multiply,
  "^": power,
};
// operate numbers
function operate(x, y, operator) {
  switch (operator) {
    case "+":
      return operators[operator](x, y);
    case "-":
      return operators[operator](x, y);
    case "/":
      return operators[operator](x, y);
    case "*":
      return operators[operator](x, y);
    case "^":
      return operators[operator](x, y);
    default:
      return x;
  }
}
//display error
function displayError() {
  return (display.textContent = "ERROR");
}
//update display
function updateDisplayContent() {
  if (currentNumber) {
    display.textContent = `${currentNumber}`;
  }
  if (operator) {
    if (result === null) {
      display.textContent = `${previousNumber}`;
    }
    if (operator !== "=") {
      display.textContent = `${previousNumber}${operator}${currentNumber}`;
    }
    if (operator === "=") {
      display.textContent = `${operator} ${result}`;
    }
  }
}
//set display
function setDisplay() {
  if (result === null) {
    return (display.textContent = "0");
  }

  return (display.textContent = `${result}`);
}
function clearAll() {
  userInput = "";
  previousNumber;
  currentNumber = null;
  operator = undefined;
  result = null;
  numberBtns.forEach((n) => (n.disabled = false));
}

const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear-btn");

let userInput = "";
let previousNumber = null;
let currentNumber = null;
let operator;
let result = null;

numberBtns.forEach((number) => {
  number.addEventListener("click", (e) => {
    userInput += e.target.innerText;
    currentNumber = parseFloat(userInput);
    if (isNaN(currentNumber)) return (number.disabled = true);

    if (number.innerText === "." && userInput.includes("."))
      return (number.disabled = true);

    if (currentNumber !== undefined) {
      updateDisplayContent();
    }
    if (operator !== undefined) {
      currentNumber = parseFloat(userInput);
      result = operate(previousNumber, currentNumber, operator);
      updateDisplayContent();
      currentNumber = result;
      if (operator === "=") {
        clearAll();
        userInput = "";
        userInput += e.target.textContent;
        currentNumber = parseFloat(userInput);
        updateDisplayContent();
      }
    }
  });
});

operatorBtns.forEach((op) => {
  op.addEventListener("click", (e) => {
    operator = e.target.innerText;
    previousNumber = currentNumber;
    userInput = "";
    if (operator !== undefined && currentNumber === null) {
      clearAll();
      return displayError();
    }
    if (userInput === "") {
      numberBtns.forEach((n) => (n.disabled = false));
    }
    if (operator === "=") {
      if (result === null) {
        result = previousNumber;
        return updateDisplayContent();
      }
      if (result === Infinity) {
        clearAll();
        return displayError();
      }
      // console.log(previousNumber, currentNumber, result);
      updateDisplayContent();
    } else {
      display.textContent = `${previousNumber}${operator}`;
    }
  });
});
clearBtn.addEventListener("click", () => {
  clearAll();
  setDisplay();
});
