/*
 Express servers provide this functionality with named route parameters.
 Parameters are route path segments that begin with : in their Express route definitions.

 They act as wildcards, matching any text at that path segment. 
 For example /monsters/:id will match both/monsters/1 and /monsters/45.

 Express parses any parameters, extracts their actual values, 
 and attaches them as an object to the request object: req.params. 
 This object’s keys are any parameter names in the route, 
 and each key’s value is the actual value of that field per request.
 */
 let expressionIdCounter = 0;
 let animalIdCounter = 0;
const express = require("express")
const app = express()

// Serves Express Yourself website

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('Express'));

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  res.send(foundExpression);

});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function getElementById(id, elementList) {
  return elementList.find((element) => {
    return element.id === Number(id);
  });
};

/*function getIndexById(id, elementList) {
  return elementList.findIndex((element) => {
    return element.id === Number(id);
  });
};*/

function createElement(elementType, queryArguments) {
  if (queryArguments.hasOwnProperty('emoji') &&
      queryArguments.hasOwnProperty('name')) {
    let currentId;
    if (elementType === 'expressions') {
      expressionIdCounter += 1;
      currentId = expressionIdCounter;
    } else {
      animalIdCounter += 1;
      currentId = animalIdCounter;
    }
    return {
      'id':    currentId,
      'emoji': queryArguments.emoji,
      'name':  queryArguments.name,
    };
  } else {
    return false;
  }
};
/*
function updateElement(id, queryArguments, elementList) {
  const elementIndex = getIndexById(id, elementList);
  if (elementIndex === -1) {
    throw new Error('updateElement must be called with a valid id parameter');
  }
  if (queryArguments.id) {
    queryArguments.id = Number(queryArguments.id);
  }
  Object.assign(elementList[elementIndex], queryArguments);
  return elementList[elementIndex];
};*/

function seedElements(arr, type) {
  if (type === 'expressions') {
    arr.push(createElement('expressions', {'emoji': '😀', 'name': 'happy'}));
    arr.push(createElement('expressions', {'emoji': '😎', 'name': 'shades'}));
    arr.push(createElement('expressions', {'emoji': '😴', 'name': 'sleepy'}));
  } else if (type === 'animals') {
    arr.push(createElement('animals', {'emoji': '🐶', 'name': 'Pupper'}));
    arr.push(createElement('animals', {'emoji': '🐍', 'name': 'Snek'}));
    arr.push(createElement('animals', {'emoji': '🐱', 'name': 'Maru'}));
  } else {
    throw new Error(`seed type must be either 'expression' or 'animal'`);
  }
};