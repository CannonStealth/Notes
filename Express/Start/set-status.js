/*
Express allows us to set the status code on responses before they are sent. 
Response codes provide information to clients about how their requests were handled.
Until now, we have been allowing the Express server to set status codes for us.
For example, any res.send() has by default sent a 200 OK status code. 

The res object has a .status() method to allow us to set the status code, 
and other methods like .send() can be chained from it.*/

const express = require('express')
const app = express()

app.listen(4001, () => {
    console.log("Server is Active")
})

app.use(express.static('Express'));


const monsterStoreInventory = { fenrirs: "a", banshees: "b", jerseyDevils: "c", krakens: "d" };
app.get('/:name', (req, res, next) => {
  const monsterInventory = monsterStoreInventory[req.params.name];
  if (monsterInventory) {
    res.send(monsterInventory);
  } else {
    res.status(404).send('Monster not found');
  }
});