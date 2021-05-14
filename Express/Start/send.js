/*
In addition to .send(), .json() can be used to explicitly send JSON-formatted responses.
.json() sends any JavaScript object passed into it.*/

const express = require("express")
const app = express()

app.listen(4001, () => {
    console.log("Server is active")
})

const monsters = [{ type: 'werewolf' }, { type: 'hydra' }, { type: 'chupacabra' }];
app.get('/monsters', (req, res, next) => {
  res.send(monsters);
});