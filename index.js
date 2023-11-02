const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

// list of entries used for testing
let entries = [
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

// DELETE single phonebook entry

app.delete("/api/persons/:id", (request, response) => {
	let id = +request.params.id;
	entries = entries.filter((u) => u.id !== id);
	response.send(entries);
});

const generateID = () => {
	min = Math.ceil(1);
	max = Math.floor(1000);
	return Math.floor(Math.random() * (max - min));
};
// CREATE new entries
app.post("/api/persons", (request, response) => {
	const body = request.body;

	if (!body.name || !body.number) {
		return response.status(400).json({
			error: `content missing`,
		});
	}
	const entry = {
		id: generateID(),
		name: body.name,
		number: body.number,
	};

	entries = entries.concat(entry);

	response.json(entry);
});
