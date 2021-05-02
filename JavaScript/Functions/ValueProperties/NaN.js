// Means Not-A-Number


console.log(NaN === NaN);        // false
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN));         // true
console.log(isNaN(Number.NaN));  // true
console.log(isNaN(2));           // false
console.log(isNaN("2"));         // false
console.log(isNaN("hello"));     // true