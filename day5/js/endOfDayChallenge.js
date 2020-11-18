//  Write a function that accepts a password (string)
//     Validate the password using the following rules:
//         Must be 6-20 characters long
//         Must start with a letter
//     Alert the user if their password has been accepted or why their password was rejected

function askPassword() {
    let password = prompt("What is the password?");
    let firstChar = password.charAt(0);
    console.log(firstChar);
    console.log(typeof(firstChar));
    firstChar = parseInt(firstChar);
    console.log(firstChar);
    if (password.length < 6 || password.length > 20) {
        alert("Please type a password that is between 6 and 20 characters long");
        return askPassword();
    } else if (firstChar >= '0' || firstChar <= '9'){
    // if (typeof(firstChar) == 'number' && firstChar != NaN) {
        alert("Please type in a password with the first character as a letter");
        return askPassword();
    }
    
    return alert("Your password has been excepted.");

}
// let password = prompt("What is the password?");
askPassword();
// const password = "21";
// console.log(password.charAt(0));
