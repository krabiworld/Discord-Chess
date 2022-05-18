const express = require('express'), app = express(), router = express.Router();

/* Port */
const port = 3000;

/* For easy waypointing */
const path = require('path');

/* Static */
app.use(express.static(path.join(__dirname, '../src')))

/* Add router */
app.use('/', router);

/* Running notification */
app.listen(port, () => {
	console.log(`Running at port: ${port}, http://localhost:${port}/`);
});