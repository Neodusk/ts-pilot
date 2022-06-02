
// demonstrate the use of unions
type colors = "red" | "green" | "blue";

/**
 * A Car class to demonstrate TS
 */
class Car {
  model: string;
  make: string;
  year: number;
  color: colors;
  
  constructor(model: string, make: string, year: number, color: colors) {
    this.model = model;
    this.make = make;
    this.year = year;
    this.color = color;
  }

  getYear = () => {
    return this.year;
  }
  
  getModel = () => {
    return this.model;
  }
  
  getMake = () => {
    return this.make;
  }

  getColor= () => {
    return this.color;
  }

}

/**
 * example of an interface
 */
interface Person {
  name: string;
  age: number;
}

/**
 * Both arrow and traditional functions can be used with TS
 * @param strOrArray A string or an array of strings
 * Outputs a different message based on the type passed in
 */
function stringOrArray (strOrArray: string | string[]) {
  if (typeof strOrArray === "string") {
      console.log('This is a string');
  } else {
      console.log('This is an array');
  }
}

// Generic : provide variables to types 
type NumberArray = Array<number>;
const returnNumberArray = (num:number, numArray:NumberArray): number[] => {
  numArray.push(num);
  return numArray;
}

function main() {
  stringOrArray("A string");
  stringOrArray(["an", "array"]);
  const numArray: number[] = [];
  console.log(returnNumberArray(1, numArray));
  console.log(returnNumberArray(21, numArray));
  console.log(returnNumberArray(22, numArray));
  const oldCar = new Car("Stingray", "Corvette", 2020, "green");
  const newCar = new Car("Stingray", "Corvette", 2022, "red");
  console.log(oldCar.getYear());
  console.log(newCar.getYear());
  
  // type of person is an array that contains name and age
  type person = Array<{ name: string, age: number }>;
  const personArray: person = [];
  personArray.push({name: "Barb", age: 23});
  personArray.push({name: "Barb1", age: 232});
  console.log(personArray);
  const personInterfaceUsed: Person = {name: "fred", age: 2};
  console.log(personInterfaceUsed);

}

main();