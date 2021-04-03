const fs = require('fs')
const path = require('path')

async function readFile(filePath) {
    try {
      const data = await fs.promises.readFile(filePath); 
      console.log(data.toString()); // MAKE SURE TO ADD .toString()
    } catch (error) {
      console.error(`Got an error trying to read the file: ${error.message}`);
    }
  }
readFile('greetings.js'); // we read it

const command = require(path.join(require.main.path, 'greetings.js')) // to get info we use require and the path
console.log(command)




