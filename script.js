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

function round_off(a) {
    let idx = -1;
    for(let i=0; i<a.length; i++) {
        if(a[i]==='.') {
            idx = i;
            break;
        }
    }
    if(idx===-1) {
        return a;
    }
    if(a.substr(i).length <= 3) {
        return a;
    }
    else {
        return String(Number(a).toFixed(3));
    }
}

let first_operand = 0;
let operator = '+';
let second_operand = 0;
let operator_clicked = 0;

const clear = document.querySelector("#clear");
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const result = document.querySelector("#equal");

clear.addEventListener("click", () => {
    display.textContent = "0";
    first_operand = 0;
    operator = '+';
    second_operand = 0;
    operator_clicked = 0;
});

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        if(display.textContent==='0' || operator_clicked===1) {
            display.textContent = "";
        }
        let display_onScrn = display.textContent;
        display_onScrn += num.textContent;
        if(operator_clicked===0) {
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
        if(operator_clicked===0) {
            operator_clicked = 1;
            operator = op.textContent;
            display.textContent = "0";
        }
        else {
            let operation_result = operate(operator, first_operand, second_operand);
            first_operand = operation_result;
            display.textContent = operation_result;
            operator = op.textContent;
        }
    });
});

result.addEventListener("click", () => {
    if(operator_clicked===1) {
        let operation_result = operate(operator, first_operand, second_operand);
        first_operand = operation_result;
        display.textContent = operation_result;
        operator_clicked = 0;
    }
    else {
        return;
    }
});