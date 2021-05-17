import fs from "fs";
import path from "path";

/* path.join() creates a path from the provided arguments
for example path.join("hello", "world", "aaa.js") -> hello/world/aaa.js

fs.existsSync() checks if the FIRST argument exists 
we can use path.join() inside fs.existsSync() to check if a relative path exists

fs.lstatSync gets stats so it helps you checking if it is a directory .isDirectory()

 mkdirSync(join(require.main.path, 'tets')); creates a folder

 fs/promises has most of this API, but in promise form which can be nicer in some situations
*/

if (fs.existsSync(path.join("C++", "Basic 1", "5if-else.cpp"))) {
    console.log("yes");
    // Do something
} else console.log("no");

if (fs.lstatSync(path.join("C++", "Basic 1", "5if-else.cpp")).isDirectory())
    console.log("DIRECTORY: yes");
else console.log("DIRECTORY: no");

console.log(fs.lstatSync(path.join("C++", "Basic 1", "5if-else.cpp")));
