const fetch = require("node-fetch")

fetch('http://localhost:4001/monsters/1', { method: "GET" })
    .then(res => res.text())
    .then(text => console.log(text))