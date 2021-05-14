/*
put is used for update
 Query strings appear at the end of the path in URLs, and they are indicated with a ? character. For instance, in /monsters/1?name=chimera&age=1,
  the query string is name=chimera&age=1 and the path is /monsters/1/ 
*/

const app = require("express")()

const PORT = 4001;

app.listen(PORT, () => console.log("Listening in port " + PORT))

const monsters = { '1': { name: 'cerberus', age: '4'  } };
// PUT /monsters/1?name=chimera&age=1
app.put('/monsters/:id', (req, res, next) => {
  const monsterUpdates = req.query;
  console.log(monsterUpdates)
  monsters[req.params.id] = monsterUpdates;
  res.send(monsters[req.params.id]);
}); // Will be executed when someone do a put request