// Let's say you're a car manufacturer and need to create many cars to build your inventory
// Create a class called "car"
// Add some properties like "make", "model", "year", "color", etc
// Use your car class to construct 4 (or more) different cars
// console log your code so you can see the results!
// BONUS: Display the details for each of your cars in your HTML

class Car {
    constructor(name, model, year, color) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    toString(){
        return `${this.name} ${this.model} ${this.year} ${this.color}`;
    }
}

let myCar1 = new Car('Ford', 'F-150', 2000, 'Green');
let myCar2 = new Car('Honda', 'Civic', 2011, 'Charcoal Gray');
let myCar3 = new Car('MG', 'B', 1963, 'White');
let myCar4 = new Car('Nissan', 'Ultima', 2019, 'Red');
console.log(myCar1, myCar2, myCar3, myCar4);

const liMyCar1 = document.querySelector('#class1');
liMyCar1.innerHTML = myCar1.toString();

const liMyCar2 = document.querySelector('#class2');
liMyCar2.innerHTML = myCar2.toString();

const liMyCar3 = document.querySelector('#class3');
liMyCar3.innerHTML = myCar3.toString();

const liMyCar4 = document.querySelector('#class4');
liMyCar4.innerHTML = myCar4.toString();