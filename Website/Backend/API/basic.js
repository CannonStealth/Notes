//INITIALIZATION
const express = require('express');
const app = express();

//INITIALIZATION OF THE ARRAY
let basicapi = [
  "Hello World",
  "Hello Earth",
  "Hello"
]

//SENDS A RANDOM JSON RESPONSE FROM THE ARRAY
app.get("/random", (req, res) => {
    let response = basicapi[Math.floor(Math.random() * basicapi.length - 1)]
    res.status(200).send({ response })
})

//LISTEN THE API TO PORT
app.listen(3000, () => console.log("API is online"));
