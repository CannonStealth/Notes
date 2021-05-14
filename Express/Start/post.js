/*
   used for creating new resources.
  Because POST routes create new data, their paths do not end with a route parameter,
  but instead end with the type of resource to be created.
 The difference between POST and PUT is that PUT requests are idempotent.
   That is, calling the same PUT request multiple times
  will always produce the same result. 
  In contrast, calling a POST request repeatedly have side effects
   of creating the same resource multiple times.
 */

 const express = require('express') 
 const app = express()
 
 const PORT = 4001 
 
 app.listen(PORT, () => {
     console.log("Server is listening on port " + PORT) 
 })
 

app.post("/test", (req, res, next) => {
    res.status(201).send( { '1': { name: 'cerberus', age: '4'  } });
    // /test/1?name=chimera&age=1
})

