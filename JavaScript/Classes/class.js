// a class represents a TYPE of something.
// a person is a type of thing in the universe.
class Person {
    // conventionally a class name uses PascalCase
    // public field
    // these can be directly accessed outsied the class
    name;

    // private fields
    // cannot be accessed outside without getters or setters
    #hairColor;
    #eyeColor;

    // a constructor is a special function that can be used with new to
    // create an object that is an intance of this class
    constructor(name, hairColor = "brown", eyeColor = "blue") {
        this.name = name;
        this.#hairColor = hairColor;
        this.#eyeColor = eyeColor;
    }

    // getters can be used to expose private fields
    // this allows reading but not writing to the fields.

    get hairColor() {
        return this.#hairColor;
    }

    get eyeColor() {
        return this.#eyeColor;
    }
}

// classes can extend, or inherit from, other classes
// this Child class has all the properties and methods of Person
// but also can have more, or override ones declared in Person
class child extends Person {
    #age = 5;

    constructor(
        name = new Person().name,
        hairColor = new Person().hairColor,
        eyeColor = new Person().eyeColor
    ) {
        // a subclass MUST use the super constructor.
        super(name, hairColor, eyeColor);
    }

    ageUp() {
        this.#age++;
    }

    get age() {
        return this.#age;
    }
}

// creates a person with default parameters (except name, which is required)
const cannon = new Person("Cannon");
console.log(cannon.hairColor); // returns 'brown'

const newChild = new child("Child", "blonde", undefined);
console.log(newChild.eyeColor); // returns 'blue' as the class's eyeColor is set to the parent's default eyeColor which is blue.
