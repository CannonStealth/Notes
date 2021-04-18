//INITIALIZATION
const express = require('express'); 
//CREATE NEW EXPRESS APP
const app = express();
//PORT AT WHICH WEBSITE SHOULD BE UP
const PORT = 3000;

//IF SOMEONE GOES TO https://localhost:3000/ IT WILL REDIRECT HIM TO https://localhost:3000/home 
app.get('/', function(req, res){ 

    res.redirect('/home'); 
});

app.listen(PORT, function(err){ 

    if (err) console.log(err); 

    console.log("Server is ON", PORT); 
});
