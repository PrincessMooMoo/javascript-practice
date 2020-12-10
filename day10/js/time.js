// const myTimeOut = setTimeout(function () {
//     alert('working');
// }, 4000);

const splash = document.createElement('div');
const content = document.createElement('div');


document.body.style.overflow = 'hidden';
document.body.style.margin = '0';

splash.style.width = '100%';
splash.style.height = '100vh';
splash.style.backgroundColor = 'green';
splash.style.position = 'absolute';
splash.style.zIndex = '100';
splash.classList.add('splash');

setTimeout(function() {
    splash.classList.add('fade');
}, 3000);


content.style.width = '100%';
content.style.height = '100vh';
content.style.backgroundColor = 'red';
content.style.position = 'absolute';

document.body.appendChild(splash);
document.body.appendChild(content);
