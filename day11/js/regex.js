//a fancy way to find information in strings

// /e/ = this will match all e's

// const string = 'a lazy brown dog sit.';
// const myRegex = new RegExp('is?' , 'gi');//g is global. i is upper and lower case
// const matches = string.match(myRegex); //the ? means that the letter before it is optional
// console.log(matches);

// //you can search the internet for specific cases where you would like to use regex, such as a phone number.

// const phoneNumber = prompt('phone number');

// if (matches) {
//     alert('valid number');
// } else {
//     alert ('non valid number');
// }

const string = 'my school is cool';

console.log(string.replace(/my school/g, 'geekwise')); // will replace my school with geekwise

//most common used methods are match(), replace(), and split()