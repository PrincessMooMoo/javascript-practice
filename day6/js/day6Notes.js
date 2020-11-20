// alert('External');
// const div = document.querySelector('div');
//now that we have selected the div, we can do stuff to the div
// div.addEventListener('click', function () {
//     console.log('click');
// });//the second parameter is for a function
// console.log('div', div);
const body = document.querySelector('body');

// body.innerHTML = //or you can use innerText
// // `<p> This is a paragraph </p>`;
// `<h1> Variable declarations </h1>
//     <ul>
//     <li> var </li>
//     <li> const </li>
//     <li> let </li>
//     </ul>
//     `;

// body.innerHTML += // += will allow you to add to the body when it has already been called
// // `<p> This is a paragraph </p>`;
// `<h1> Variable declarations </h1>
//     <ul>
//     <li> var </li>
//     <li> const </li>
//     <li> let </li>
//     </ul>
//     `;

// body.innerHTML += // += will allow you to add to the body when it has already been called
//     // `<p> This is a paragraph </p>`;
//     `<h1> Variable declarations </h1>
//         <ul>
//         <li> var </li>
//         <li> const </li>
//         <li> let </li>
//         </ul>
//         `;
body.innerHTML += '<hr>'
function addTopic(topic, listOfThings) {
    let  createData = `
    <h1> ${topic} </h1>
        <ul>
    `;
    for (let point of listOfThings){
        createData += `<li>${point}</li>`
    };
    createData += '</ul>';
    return createData;
}
body.innerHTML += addTopic
('Test', 
['starts with letters', 
'cannot start with numbers',]);
body.innerHTML += addTopic(
    'Variable Types',
    ['string',
    'number']
);

//do while loop
// let i = 0;
// do {console.log(i); i++} while (i < 5);
//while loop
// let i = 0;
// while ( i < 10) { i++;
//     console.log(i);
// }

// let i = 0;
// while (i < 10) { i++;
// console.log(i); if (i > 1) {
//     break;
// }
// };

//for...in
// let user = {
//     name: 'v',
//     title: 'CEO',
//     eyes: 'brown',
// };

// for( let key in user ){
//     console.log(key, user[key]);//gives the values of the keys
// }

// let myArray = ['milk', 'cereal', 'juice'];
// for (let value of myArray){//this is used for arrays
//     console.log(value);
// }

// myArray.forEach( item =>
//     console.log(item));
// myArray.forEach( (item => 
//     console.log(item, indexedDB)));
