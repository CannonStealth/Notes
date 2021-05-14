const express = require('express')
const app = express()

const PORT = 4001

app.listen(PORT, () => console.log("Connected in port " + PORT))

const monsters = {
    '1': {
      name: 'godzilla',
      age: 250000000
    },
    '2': {
      Name: 'manticore',
      age: 21
    }
  }
   
  const monstersRouter = express.Router();
   
  app.use('/monsters', monstersRouter);
   
  monstersRouter.get('/:id', (req, res, next) => {
    const monster = monsters[req.params.id];
    if (monster) {
      res.send(monster);
    } else {
      res.status(404).send("NOT FOUND");
    }
  });
   


  /*
An Express router provides a subset of Express methods.
.Router() creates one 

To use a router, we mount it at a certain path using app.use() and pass in the router
 as the second argument.
This router will now be used for all paths that begin with that path segment. */