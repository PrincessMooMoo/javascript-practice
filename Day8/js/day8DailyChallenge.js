// Congrats, you got a new dog!
// Create an object named "dog"
// Name and describe your dog
// Add a property to your dog object called "name" and assign a name
// Add two more properties to describe your dog. (ex: How many legs, fur color, etc)
// Let's teach it some tricks
// Give your dog a property called “speak” and assign a function that will alert “woof!”
// Add another method to teach your dog one more trick
// BONUS: Display your dog object values in HTML

document.querySelector('#demo');

let dog = {
    name: "Barkly",
    numLegs: 4,
    color: "brown",
    speak: function woof() {
        alert("WOOF!");
    },
    jump: function jump() {
        alert("Barkly jumps onto your lap.");
    }

}
console.log(dog.speak());
console.log(dog.jump());


//Below is the instructor's code
const dogObject = {};
dogObject.name = 'rover';
dogObject.color = 'chocolate';
dogObject.speak = function () {
    alert('Woof!');
}
dogObject.sit = function (){
    alert(this.name + 'sits.');
}
console.log(dogObject);
dogObject.show = function () {
    document.body.innerHTML = `
    <div>
        <ul>
            <li>
                Name: ${this.name}
            </li>
            <li>
                Color: ${this.color}
            </li>
        </ul>
    </div>
    `
}

class Dog {
    name = 'rover';
    color = 'chocolate';
    speak() {
        alert(this.name + ' says Woof!');
    }
    sit() {
        alert(this.name + ' sits.');
    }
    show() {
        const ul = document.createElement('ul');
        document.body.appendChild(ul);
        const name = document.createElement('li');
        name.innerHTML = 'Name: ' + this.name;
        ul.appendChild(name);
        const speak = document.createElement('li');
        ul.appendChild(speak);
        speak.addEventListener('click', () => {
            this.speak();
        })
    }
}
const dog2 = new Dog;
class littleDog extends Dog {
    digUnderFence() {
        alert(this.name + ' got loose under the fence.');
    }
    speak() {
        // super.speak();
        alert('softly');
    }
}
const littleDog = new littleDog();