const express = require('express');
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
	res.send("Hello Testing!");
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});