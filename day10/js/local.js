const colorInput = document.createElement('input');
const colorInput2 = document.createElement('input');
const h1 = document.createElement('h1');

document.body.appendChild(h1);
document.body.appendChild(colorInput);
document.body.appendChild(colorInput2);

h1.innerHTML = 'Title';
colorInput.type = 'color';
colorInput2.type = 'color';



let color = localStorage.getItem('color');
let backgroundColor = localStorage.getItem('backgroundColor');
let test = localStorage.getItem('test');
console.log(JSON.parse(test));//local storage is only going to allow you to save string data, so the type of will be string

if(backgroundColor) {
    document.body.style.backgroundColor = backgroundColor;
    colorInput.value = backgroundColor;
}

if(color) {
    document.body.style.color = color;
    colorInput2.value = color;
}

localStorage.setItem('test', JSON.stringify(test));

colorInput.addEventListener('input', function() {
    const value = colorInput.value;
    console.log(colorInput.value);
    document.body.style.backgroundColor = value;
    localStorage.setItem('backgroundColor', value);
});

colorInput2.addEventListener('input', function() {
    console.log(colorInput2.value);
    document.body.style.color = colorInput2.value;
    localStorage.setItem('color', colorInput2.value);
});