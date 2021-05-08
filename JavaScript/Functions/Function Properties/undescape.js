// Deprecated, use decodeURI or decodeURIComponent

console.log(unescape('abc123'));     // "abc123"
console.log(unescape('%E4%F6%FC'));  // "äöü"
console.log(unescape('%u0107'));     // "ć"