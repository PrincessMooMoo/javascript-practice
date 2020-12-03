const button = document.querySelector('#thisButton');
const div = document.querySelector('#thisDiv');

button.addEventListener('click', hideDiv);

function hideDiv() {
    if (div.style.display === 'none') {
        div.style.display = 'block';
        console.log('I don know');
    } else {
        div.style.display = 'none';
        console.log("is it working?");
    }
}
