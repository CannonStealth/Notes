// Responding to requests
/*
if your server receives a GET request at ‘/monsters’, 
we will use a route to define the appropriate functionality for that HTTP verb (GET)
and path (/monsters).

The path is the part of a request URL after the hostname and port number,
so in a request to localhost:4001/monsters

Express uses app.get() to register routes to match GET requests.
Express routes (including app.get()) usually take two arguments, a path (usually a string),
and a callback to handle and send a response
*/

const express = require("express")
const app = express()

app.listen(4001, () => {
    console.log("Server is active")
})

app.get("/test-zone", (req, res, next) => { // Parameters (req, res, next)

})
