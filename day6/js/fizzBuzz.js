// Write a function called fizzbuzz that will accept no arguments
// The goal of this function is to print out all numbers from 1 to 100 but with three exceptions:

//     For every number that is divisible by 3 and 5, console log "FizzBuzz"
//     For every number that is divisible by only 3 and not 5, console log "Fizz"
//     For every number that is divisible by only 5 and not 3, console log "Buzz"

const body = document.body;
body.innerHTML += `<ul>Here is your list of Fizz-Buzz`; 
function fizzBuzz(number) {
    number = parseInt(number);
    let convertNumber = "";
    for (let i = 1; i <= number; i++){
        if (i % 3 == 0 && i % 5 == 0){
            convertNumber = "FizzBuzz";
            // console.log(convertNumber);
        } else if (i % 3 == 0 && i % 5 !== 0){
            convertNumber = "Fizz";
            // console.log(convertNumber);
    } else if (i % 5 == 0 && i % 3 !== 0){
        convertNumber = "Buzz";
    } else {
        convertNumber = i;
    }
    // console.log(convertNumber);
    body.innerHTML += `<li> ${convertNumber}</li>`;
};
return body.innerHtml += `</ul>`;
};
let input = fizzBuzz(prompt("Please enter a number between 1-100."));