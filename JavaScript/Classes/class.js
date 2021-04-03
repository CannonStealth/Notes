class person {
    constructor(hairColor = 'brown', eyeColor = 'blue') {
        this._hairColor = hairColor
        this._eyeColor = eyeColor
    }

    get hairColor() {
        return this._hairColor
    }

    get eyeColor() {
        return this._eyeColor
    }
}

class child extends person { // Copies all of 
    constructor(hairColor = new person().hairColor, eyeColor = new person().eyeColor, skin = 'white') {
        super(hairColor, eyeColor) // Super must always come first in order to be able to use the this keyword.
        this._skin = skin
    }
    
    get skin() {
        return this._skin
    }
}

const cannon = new person()
console.log(cannon.hairColor) // returns 'brown'
const newChild = new child('blonde', undefined, 'black')
console.log(newChild.eyeColor) // returns 'blue' as the class's eyeColor is set to the parent's default eyeColor which is blue.
