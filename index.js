let operation;

function func() {
    let result;
    let num1 = Number(document.getElementById("x").value);
    let num2 = Number(document.getElementById("y").value);
    class Calculator {
        static addition() {
            result = num1 + num2;
        }
        static subtraction() {
            result = num1 - num2;
        }
        static multiplication() {
            result = num1 * num2;
        }
        static division() {
            result = num2 ? num1 / num2 : "На ноль делить нельзя!";
        }

    }
    switch (operation) {
        case '+':
            Calculator.addition();
            break;
        case '-':
            Calculator.subtraction();
            break;
        case '*':
            Calculator.multiplication();
            break;
        case '/':
            Calculator.division();
            break;
    }
    document.getElementById("result1").innerHTML = result;
}