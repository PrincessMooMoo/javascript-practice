const button = document.createElement('button');
const toDoList = [];
const ul = document.createElement('ul');
//Read
const body = document.body;
//Update
body.appendChild(button);
//Update
button.innerHTML = 'Add a to do';
//Update
body.appendChild(ul);
button.addEventListener('click', function(){
    //Read
    const value = prompt('Name of item');
    //Update our grocery list
    toDoList.push(value);
    const li = document.createElement('li');
    li.innerHTML = value;
    ul.appendChild(li);
    console.log(toDoList);

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