function add(a, b) {
    return round_off(+a + +b);
}

function subtract(a, b) {
    return round_off(a - b);
}

function multiply(a, b) {
    return round_off(a * b);
}

function divide(a, b) {
    if(b==='0') {
        return "Math Error";
    }
    return round_off(a / b);
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
    a = String(a);
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
    if(a.substr(idx).length <= 6) {
        return a;
    }
    else {
        return String(Number(a).toFixed(6));
    }
}

let first_operand = 0;
let operator = '+';
let second_operand = 0;
let operator_clicked = 0;
let no_2nd_operand_selected = 1;
let clear_display_for_2nd_operand = 1;

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
    no_2nd_operand_selected = 1;
    clear_display_for_2nd_operand = 1;
});

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        if(display.textContent==='0' || display.textContent==="Math Error") {
            display.textContent = "";
        }
        if(operator_clicked===1) {
            if(clear_display_for_2nd_operand===1) {
                display.textContent = "";
                clear_display_for_2nd_operand = 0;
            }
        }
        let display_onScrn = display.textContent;
        if(operator_clicked===0) {
            display_onScrn += num.textContent;
            first_operand = display_onScrn;
        }
        else{
            no_2nd_operand_selected = 0;
            display_onScrn += num.textContent;
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
        }
        else {
            if(no_2nd_operand_selected===1) {
                if(operator==='*' || operator==='/') {
                    second_operand = 1;
                }
                else {
                    second_operand = 0;
                }
            }
            else {
                let operation_result = operate(operator, first_operand, second_operand);
                if(operation_result==="Math Error") {
                    display.textContent = operation_result;
                    first_operand = 0;
                    operator = '+';
                    second_operand = 0;
                    operator_clicked = 0;
                    no_2nd_operand_selected = 1;
                    clear_display_for_2nd_operand = 1;
                    return;
                }
                first_operand = operation_result;
                display.textContent = operation_result;
                no_2nd_operand_selected = 1;
                operator = op.textContent;
                clear_display_for_2nd_operand = 1;
            }
        }
        console.log(operator);
    });
});

result.addEventListener("click", () => {
    if(operator_clicked===1) {
        let operation_result = operate(operator, first_operand, second_operand);
        if(operation_result==="Math Error") {
            display.textContent = operation_result;
            first_operand = 0;
            operator = '+';
            second_operand = 0;
            operator_clicked = 0;
            no_2nd_operand_selected = 1;
            clear_display_for_2nd_operand = 1;
            return;
        }
        first_operand = operation_result;
        display.textContent = operation_result;
        no_2nd_operand_selected = 1;
        operator_clicked = 0;
        clear_display_for_2nd_operand = 1;
    }
    else {
        return;
    }
});