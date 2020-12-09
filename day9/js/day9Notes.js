function onSubmit(event) {
    event.preventDefault();
    const validMyName = event.target.myName.value;
    const validIsActive = event.target.isActive.checked;

    if (!validIsActive || !validMyName) {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
        return;
    }
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');

    console.log('this is on submit', event.target.isActive.checked);//checkboxes have a checked property. Not value
    const xhr = newXMLHttpRequest();
    xhr.open('GET', 'http://587afcf367d9.ngrok.io/user');
    xhr.onreadystatechange = function (data) {
        console.log(data);
    }
    xhr.onload = function (data) {
        const obj = JSON.parse(xhr.responseText);
        document.querySelector('img').src = obj.message;
    }
    xhr.send();
}




