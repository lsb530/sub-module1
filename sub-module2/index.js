const express = require('express');
const app = express();
const port = 6666;

app.get('/', (req, res) => {
	res.send('Hello Node.js!');
});

app.listen(port, () => {
	console.log('Listening...');
});