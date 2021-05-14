// Delete is to delete

const express = require('express');
const app = express();
const PORT = 4001;

app.delete('/', (req, res) => {
res.send("DELETE Request Called")
})

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT ", PORT);
});
