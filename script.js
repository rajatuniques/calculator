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

const clear = document.querySelector("#clear");
const display = document.querySelector(".display");

clear.addEventListener("click", () => {
    display.textContent = "";
});

