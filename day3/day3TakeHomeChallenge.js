// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name

// *BONUS* 
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday

function userName() {
    const firstName = prompt("What is your first name?", "John");
    const lastName = prompt("What is your last name?", "Doe");
    console.log(firstName);
    alert(lastName);
}

function birthday() {
    const birthDate = prompt("When is your birthday?", "01/01/2001");
    let convertDate = new Date(birthDate);
    confirm(`Is ${convertDate} your birthday, FO REALZ??`);
    alert(convertDate);
}
userName();
birthday();