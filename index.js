/**
 * A Car class to demonstrate TS
 */
class Car {
    constructor(model, make, year, color) {
        this.getYear = () => {
            return this.year;
        };
        this.getModel = () => {
            return this.model;
        };
        this.getMake = () => {
            return this.make;
        };
        this.getColor = () => {
            return this.color;
        };
        this.model = model;
        this.make = make;
        this.year = year;
        this.color = color;
    }
}
/**
 * Both arrow and traditional functions can be used with TS
 * @param strOrArray A string or an array of strings
 * Outputs a different message based on the type passed in
 */
function stringOrArray(strOrArray) {
    if (typeof strOrArray === "string") {
        console.log('This is a string');
    }
    else {
        console.log('This is an array');
    }
}
const returnNumberArray = (num, numArray) => {
    numArray.push(num);
    return numArray;
};
function main() {
    stringOrArray("A string");
    stringOrArray(["an", "array"]);
    const numArray = [];
    console.log(returnNumberArray(1, numArray));
    console.log(returnNumberArray(21, numArray));
    console.log(returnNumberArray(22, numArray));
    const oldCar = new Car("Stingray", "Corvette", 2020, "green");
    const newCar = new Car("Stingray", "Corvette", 2022, "red");
    console.log(oldCar.getYear());
    console.log(newCar.getYear());
    const personArray = [];
    personArray.push({ name: "Barb", age: 23 });
    personArray.push({ name: "Barb1", age: 232 });
    console.log(personArray);
    const personInterfaceUsed = { name: "fred", age: 2 };
    console.log(personInterfaceUsed);
}
main();
