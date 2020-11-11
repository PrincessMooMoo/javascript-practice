// Challenge 2
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result

function promptNumbers(){
    let firstNumber = prompt("Please enter a number.");
    let secondNumber = prompt("Please enter second number.");
    let convertFirstNumber = parseInt(firstNumber);
    let convertSecondNumber = parseInt(secondNumber);
    alert(convertFirstNumber + convertSecondNumber);

}
promptNumbers();