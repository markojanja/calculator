"use strict";

// Math functions

function add(x, y) {
  if (!y) {
    return x;
  }
  return x + y;
}

function subtract(x, y) {
  if (!y) {
    return x;
  }
  return x - y;
}

function divide(x, y) {
  if (!y) {
    return x;
  } else if (x === 0) {
    return "Error";
  }
  return x / y;
}

function multiply(x, y) {
  if (!y) {
    return x;
  }
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
//update display

function updateDisplay() {
  if (result === null) {
    return (display.textContent = "0");
  }
  return (display.textContent = `${result}`);
}

const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const display = document.querySelector(".display");

let userInput = "";
let previousNumber;
let currentNumber;
let operator;
let result = null;

function clearAll() {
  userInput = "";
  previousNumber;
  currentNumber = null;
  operator = undefined;
  result = null;
  numberBtns.forEach((n) => (n.disabled = false));
}

updateDisplay();
clearAll();
numberBtns.forEach((number) => {
  number.addEventListener("click", (e) => {
    userInput += e.target.innerText;
    currentNumber = parseFloat(userInput);
    if (operator === "=") {
      userInput = "";
      userInput += e.target.innerText;
      previousNumber = parseFloat(userInput);
    }
    if (number.innerText === "." && userInput.includes(".")) {
      number.disabled = true;
    }

    if (currentNumber !== undefined) {
      display.textContent = `${currentNumber}`;
    }
    if (operator !== undefined) {
      currentNumber = parseFloat(userInput);
      result = operate(currentNumber,previousNumber, operator);
      if (operator === "=") {
        return display.textContent = `${result}`;
      }
      display.textContent = `${previousNumber}${operator}${currentNumber}`;
      currentNumber = result;
    }
  });
});

operatorBtns.forEach((op) => {
  op.addEventListener("click", (e) => {
    operator = e.target.innerText;
    if (operator !== undefined && currentNumber === null) {
      clearAll();
      return display.textContent = "error";
    }
    previousNumber = currentNumber;
    userInput = "";
    if (userInput === "") {
      numberBtns.forEach((n) => (n.disabled = false));
    }
    if (operator === "=") {
      if (result === null) {
        return display.textContent = "error";
      }
      display.textContent = `${operator} ${result}`;
    } else {
      display.textContent = `${previousNumber}${operator}`;
    }
  });
});

const clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click", () => {
  clearAll();
  updateDisplay();
});
