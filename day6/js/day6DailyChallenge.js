// Create a variable called "groceryList" and assign an empty array
// Prompt your user for a grocery item (string)
// Push the user's grocery item to your groceryList
// Console log the groceryList every time a new item is added


//created by instructor
//create
const button = document.createElement('button');
const groceryList = [];
const ul = document.createElement('ul');
//Read
const body = document.body;
//Update
body.appendChild(button);
//Update
button.innerHTML = 'Add Item';
//Update
body.appendChild(ul);
button.addEventListener('click', function(){
    //Read
    const value = prompt('Name of item');
    //Update our grocery list
    groceryList.push(value);
    const li = document.createElement('li');
    li.innerHTML = value;
    ul.appendChild(li);
    console.log(groceryList);

    const deleteButton =document.createElement('button');
    deleteButton.innerHTML = 'X';
    li.prepend(deleteButton);
    deleteButton.addEventListener('click', function () {
        console.log('delete', this);
        //delete
        this.parentElement.remove();
        // li.remove();Works the same as the this.parentElement.remove();
    });
});





