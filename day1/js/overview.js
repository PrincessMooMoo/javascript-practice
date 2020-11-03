// document.querySelector('button').style.color = "green";
// alert('inline')

// function myAlert(){
    // alert("My Alert")
// }

// var myFavoriteColor = "Green";
// console.log(myFavoriteColor);
// var myFavoriteColor = "Red";
// console.log(myFavoriteColor);

// const myFavoriteColor = "Green"; 
// console.log(myFavoriteColor);
// const myFavoriteColor = "Red"; //This is a nono. Can't redeclare const variable
// console.log(myFavoriteColor);

// myFavoriteColor = "Purple"; //No, cannot reassign a const variable

// let myFavoriteColor = "Green";
// console.log(myFavoriteColor);//let can be reasigned, but you cannot redeclare it (depends on scope)

//javascript is dynamically type. You can change its type. Must keep an eye on this.
//we are predominantly going to use const and let for variables

//declare
// var myVar = "redeclarable and re-assignable";
// let myLet = "re-assignable";
// const myConst = "once assigned, cannot be re-assigned";

//TYPES
/*const myString = "This is a string.";
const myNumber = 2;
const myBoolean = true;
const MyString = "Different String"; //Names are case sensetive

//TYPES EXTENDED
const myObject = {
    backgroundColor: 1,
    myNumber: 1,
    myString: "Chumbawumba",
    myBoolean: true,
    updateBackgroundColor: function(){
        this.backgroundColor = "yellow";
    },
};*/

const myArray = [1, "This is a string", true,];

// console.log(myObject);
console.log(myArray);

debugger;
function doubleNumber(value) {
    console.log("can you see this?");
    return value * 2;
};//you don't have to put a semicolon after a function declaration, but it is best to just be consistent and use a semicolon

console.log(doubleNumber(9));
console.log(doubleNumber(10));