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

// Return all entries
app.get("/api/persons", (request, response) => {
	response.send(entries);
});

// Info page
app.get("/info", (request, response) => {
	response.send(
		`Phonebook has entries for ${entries.length} people <br><br>${Date()}`
	);
});

// app.listen is needed to run the server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

// GET Single phonebook entry
app.get("/api/persons/:id", (request, response) => {
	let id = +request.params.id;
	let user = entries.find((u) => u.id === id);
	if (user) {
		response.send(user);
	} else {
		response.status(404).send("Sorry cannot find that entry");
	}
});
