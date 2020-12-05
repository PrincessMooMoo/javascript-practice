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
}

let myCar1 = new Car('Ford', 'F-150', 2000, 'Green');
let myCar2 = new Car('Honda', 'Civic', 2011, 'Charcoal Gray');
let myCar3 = new Car('MG', 'B', 1963, 'White');
let myCar4 = new Car('Nissan', 'Ultima', 2019, 'Red');
console.log(myCar1, myCar2, myCar3, myCar4);