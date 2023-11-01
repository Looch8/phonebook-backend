const express = require("express");
const app = express();
const port = 3001;

// list of entries used for testing
const entries = [
	{
		id: 1,
		name: "Arto Hellas",
		number: "040-123456",
	},
	{
		id: 2,
		name: "Ada Lovelace",
		number: "39-44-5323523",
	},
	{
		id: 3,
		name: "Dan Abramov",
		number: "12-43-234345",
	},
	{
		id: 4,
		name: "Mary Poppendieck",
		number: "39-23-6423122",
	},
];

// app.get is used to define the routes
app.get("/api/persons", (request, response) => {
	response.send(entries);
});

// app.listen is needed to run the server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
