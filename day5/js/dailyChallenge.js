//Write a function that accepts a number as an argument
// Alert the user whether the given number is even or odd
// Call your function

//This is my attempt to do the challenge
// function callNumber(){
//     const number = prompt("please type in a number");
//     let numberConvert = parseInt(number);
//     if (numberConvert % 2 == 0){
//         alert("Your number is even");
//     } else if (numberConvert % 2 !== 0){
//         alert("Your number is odd");
//     } else {
//         alert("you didn't enter a number");
//     }
//     }

// callNumber();

//This is the block that the instructor does
function evenOrOdd(value) {
    if (!value){
        alert("please enter a real number");
    }
    return value % 2 ? alert("Odd") : alert("Even");

}

const answer = parseInt(prompt("Please enter a number"));
document.body.innerHTML = evenOrOdd(answer);