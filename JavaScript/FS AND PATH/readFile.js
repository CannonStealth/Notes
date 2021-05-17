// the node filesystem API will not work on the browser.
import fs from "fs/promises";
import path from "path";

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath);
        console.log(data.toString()); // MAKE SURE TO ADD .toString() as data is a Buffer
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

readFile("greetings.js"); // we read the file

const command = await import(path.join(require.main.path, "greetings.js")); // to get info we use require and the path
console.log(command);
