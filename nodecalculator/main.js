// add sub mul div
// take num1 num2
// Please enter your first number

const readline = require("readline-sync")

let num1 = readline.question("Please enter your first number: ")
let num2 = readline.question("Please enter your second number: ")
let operation = readline.question("What operation would you like to perform? add, sub, mul or div ")

const calculatorFunction = () => {
    if (operation === 'add') {
        console.log(num1 + num2);
    } else if (operation === 'sub') {
        console.log(num1 - num2);
    } else if (operation === 'mul') {
        console.log(num1 * num2)
    } else if (operation === 'div') {
        console.log(num1 / num2)
    } else {
        operation = readline.question("Please enter exactly add, sub, mul or div ")
        calculatorFunction()
    }
}
calculatorFunction()
