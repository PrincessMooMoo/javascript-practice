// // document.querySelector(selectors: 'button').style.border = '1px solid green';

// var variableName = 1 + "string" + true; //we don't use var very much anymore
// let myLet = ""; //you cannot redeclare this variable
// let myLet = ""; this is a nono, but you can assign something new
// const myConstVariable = 1;//you cannot redeclare or assign something new
// const myConstVariable = 1; this is a nono

// function login(apiUser) {
//     const user = apiUser;
//     console.log(user);
// }//the suggestion is to use const until it breaks, then use let

// login("Michigan");

//TYPES of DATA

// console.log(typeof variableName, typeof 1, typeof true);
// const title = "strings";//strings
// const age = 9;//numbers
// const isActive = true;//booleans
// const hasVipMembership = false;//try to name your variables to what the content is as much as possible
// const myObject = {
//     age: 1,
//     score: 2,
//     time: 5,
// };
// console.log(typeof myObject);
// console.log(myObject);
// const myArray = [1, 3];
// console.log(myArray);
// console.log(Array.isArray(myObject), Array.isArray(myArray));

//Operators
// const answer = (2 + 3) * 2;//use parenthesies to change the order of operations
// console.log(1 + 3);//+ - / * follows order of operations
// const answer = Math.floor(14/6) + "r:" + 14 % 6;
// console.log(answer);
// let answer = 2;
// answer += 4;
// console.log(answer);

//Strings
// answer = 'a';
// answer = "b";
// let answer = "a" + "b";
// answer = `c ${answer}
// abadaba
// today
// `; //you can use it to add other values to your code and make multiple lines of text: template literals let you write equations without the computer solving them
// console.log(answer);

// let answer = "  string";//strings have many different methods that can be used
// console.log(answer);
// let newAnswer = "abcdefghijklmnopqrstuvwxyz";
// console.dir(answer.length);
// console.dir(answer.trim());
// console.dir(newAnswer.slice(4,6));
// console.dir(newAnswer.replaceAll("c", "99"));

// prompt("Enter some html");
// document.querySelector('body').innerHTML = html;

// const users =[
//     {
//     name: 'Joe',
//     age: 20,
//     isActive: true
//     },
//     {
//         name: "Larry",
//         age: 40;
//         isActive: false
//     }
// ];

// document.querySelector("body").innerHTML = users;
// const body = document.querySelector("body");

// users.forEach(function (user:{...})){

// };
// function addMoreHtml(){
    
// }



// let variable;
// console.log(variable);//undefined
// variable = 10;
// console.log(variable);
// variable = null;
// console.log(variable);
// variable = undefined;
// console.log(variable);

//BigInt: this is for using large numbers because JS only has 64 bits of information
//JS does not do large or super small numbers very well

//created by adding an "n" to the end of an integer

//symbol
// var sym1 = Sumbol('1');