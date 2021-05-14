const express = require('express') // npm i express
const app = express() // returns an instance of an Express application

const PORT = 4001 // Tells the server WHERE to listen to requests

// now we use .listen() method

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT) // The server is active!
})

app.post("/test", (req, res, next) => {
    res.status(201).send("Hello", { '1': { name: 'cerberus', age: '4'  } });
    // /test/1?name=chimera&age=1
})