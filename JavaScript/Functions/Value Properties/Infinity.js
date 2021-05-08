// The initial value of Infinity is Number.POSITIVE_INFINITY. The value Infinity (positive infinity) is greater than any other number.

const maxNumber = Math.pow(10, 1000); // max positive number

console.log(maxNumber === Infinity)         // true
console.log(1 === Infinity)                 // false
console.log(Math.PI === Infinity)           // false
console.log((10 / 3) === Infinity)          // false
console.log(1 / Infinity);                  // 0
console.log(Number.isFinite(123))           // true
console.log(Number.isFinite(-1.23))         // true
console.log(Number.isFinite(5-2))           // true
console.log(Number.isFinite(0))             // true
console.log(Number.isFinite('123'))         // false
console.log(Number.isFinite('Hello'))       // false
console.log(Number.isFinite('2005/12/12'))  // false
console.log(Number.isFinite(Infinity))      // false
console.log(Number.isFinite(-Infinity))     // false
console.log(Number.isFinite(0 / 0))         // false