
function onSubmit(event){
    event.preventDefault();
    const userName = event.target.myName.value;
    const hasChecked = event.target.isActive.checked;
    console.log(userName);
    console.log(hasChecked);
    if (userName && hasChecked) {
        document.querySelector('.invalid').style.display="none";
        document.querySelector('#display').innerHTML = event.target.myName.value;
        document.querySelector('#checked').innerHTML = event.target.isActive.checked;
    }
}
