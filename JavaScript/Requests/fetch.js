// this file will show you how to use the WHTWG Fetch API in JS
// in node.js, you will need to install and import `node-fetch`
// import fetch from "node-fetch"
// OR
// const fetch = require("node-fetch");

// IT IS VERY IMPORTANT THAT YOU USE encodeURIComponent ON QUERY PARAMETERS.

const res = await fetch("https://meme-api.herokuapp.com/gimme");
// this line fetches the URL and saves the response in res.
// the default method is GET
const json = await res.json();

// other ways to retrieve response data exist too
// you can get plaintext with .text() and a buffer with .buffer()
