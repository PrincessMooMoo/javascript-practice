// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable
// Reverse your user’s name
// alert the reversed string

// Challenge 2
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result

// Challenge 1
function promptFirstName() {
    let firstName = prompt("Please enter your first name.", "John");
    return firstName;
  }
  function reverseName(inputFirstName) {
    let splitString = inputFirstName.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    alert(joinArray);
    return joinArray;
  } 
let firstName = promptFirstName();
let reversedName = reverseName(firstName);

// function promptFirstName() {
//     // let firstName = prompt("Please enter your first name.", "John");
//     return "firstName";
//   }
//   function reverseName() {
//     let firstName = promptFirstName();
//     let splitString = firstName.split('');
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join("");
//     // alert(joinArray);
//     return joinArray;
//   } 
// reverseName();