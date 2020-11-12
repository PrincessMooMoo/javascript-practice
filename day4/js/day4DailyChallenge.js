// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number

//my code
// function numberComparison(){
//     alert("This program will tell you which two numbers are bigger.");
//     const firstNumber = prompt("Please enter a number.");
//     const secondNumber = prompt("Please enter second number.");
//     const convertFirst = parseInt(firstNumber);
//     const convertSecond = parseInt(secondNumber);
//     if(convertFirst >= convertSecond){
//         alert(`${firstNumber} is the largest of the two numbers.`);
//     } else if(convertFirst < convertSecond){
//         alert(`${secondNumber} is the largest number.`);
//     } else {
//         alert("One of your inputs might not be a number. Please try again.");
//     }
// };
// numberComparison();

//instructors code
// let validNumber1;
// let validNumber2;
// function getNumber1(){
//     const number1 = prompt("number1");
//     const parsedNumber = parseInt(number1);
//     validNumber1 = parsedNumber;
//     if (!parsedNumber) {
//         getNumber1();
//     }
// }

// function getNumber2(){
//     const number2 = prompt("number2");
//     const parsedNumber = parseInt(number2);
//     validNumber2 = parsedNumber;
//     if (!parsedNumber) {
//         getNumber2();
//     }
// }
// getNumber1();
// getNumber2();

// console.log(validNumber1, validNumber2);
// alert(validNumber2 > validNumber1 ? validNumber2 : validNumber1);
// alert(Math.max(validNumber1, validNumber2));

//how to do it with one function (from instructor)
let validNumber1 = getValidNumber(1);
let validNumber2 = getValidNumber(2);
function getValidNumber(number){
    const numberInput = prompt("number: " + number);
    const parsedNumber = parseInt(number1);
    if (!parsedNumber && parsedNumber !== 0) {
        return getValidNumber(number);
    }
    return parsedNumber;
}

console.log(validNumber1, validNumber2);
alert(validNumber2 > validNumber1 ? validNumber2 : validNumber1);
alert(Math.max(validNumber1, validNumber2));