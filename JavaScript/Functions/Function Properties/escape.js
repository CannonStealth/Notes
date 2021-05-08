// Deprecated, Use encodeURI or encodeURIComponent

console.log(escape("Deprecated!"));             // Deprecated%21
console.log(encodeURI("Deprecated!"));          // Deprecated!
console.log(encodeURIComponent("Deprecated!")); // Deprecated!

console.log(escape("Deprecated"));              // Deprecated
console.log(encodeURI("Deprecated"));           // Deprecated
console.log(encodeURIComponent("Deprecated"));  // Deprecated