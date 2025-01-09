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
        add(a, b);
    }
    else if(operator==='-') {
        subtract(a, b);
    }
    else if(operator==='*') {
        multiply(a, b);
    }
    else if(operator==='/') {
        divide(a, b);
    }
    else {
        alert("Not a valid operator for this calculator!");
    }
}

let first_operand;
let operator;
let second_operand;