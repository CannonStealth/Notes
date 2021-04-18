//INITIALISATION
var express = require('express');
//CREATE NEW EXPRESS APP
var app = express(); 
//PORT ON WHICH WEBSITE SHOULD BE UP
var PORT = 3000;

//WHEN PERSON GOES TO http://localhost:3000/ it will display { "name":"Lejhand"}
app.get('/', function(req, res){ 
    //IT WILL SEND A JSON RESPONSE
    res.send({ "name":"Lejhand" });
});

//RUNS THE SERVER ON THE FOLLOWING PORT
app.listen(PORT, function(err){ 

    if (err) console.log(err); 

    console.log("Server is online", PORT); 
});


