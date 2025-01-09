function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if(operator==='+') {
        return add(a, b);
    }
    else if(operator==='-') {
        return subtract(a, b);
    }
    else if(operator==='*') {
        return multiply(a, b);
    }
    else if(operator==='/') {
        return divide(a, b);
    }
    else {
        alert("Not a valid operator for this calculator!");
    }
}

let first_operand;
let operator;
let second_operand;
let operator_clicked = false;

const clear = document.querySelector("#clear");
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

clear.addEventListener("click", () => {
    display.textContent = "0";
    operator_clicked = false;
});

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        if(display.textContent==='0') {
            display.textContent = "";
        }
        let display_onScrn = display.textContent;
        display_onScrn += num.textContent;
        if(operator_clicked===false) {
            first_operand = display_onScrn;
        }
        else{
            second_operand = display_onScrn;
        }
        display.textContent = display_onScrn;
    });
});

operators.forEach((op) => {
    op.addEventListener("click", () => {
        if(operator_clicked===false) {
            operator_clicked = true;
            operator = op.textContent;
            display.textContent = "0";
        }
        else {
            return;
        }
    });
});