const name = 'global';
function localFunction() {
    const name = "local";
    console.log(name);
}
localFunction();
console.log(name);