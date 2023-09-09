import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();
app.use(express.json());


app.get("/", (request, response) => {
	console.log(request);
	return response.status(234).send("Welcome to MERN tutorial");
})

app.post("/books", async (request, response) => {
	try {
		if (!request.body.title ||
			!request.body.author ||
			!request.body.publishYear) {
			return response.status(400).send({
				message: "Send all required fields!!!"
			});
		}
		const newBook = {
			title: request.body.title,
			author: request.body.author,
			publishYear: request.body.publishYear
		}
		const book = new Book(newBook);
		return response.status(201).send(book);

	} catch (error) {
		console.log(error);
		response.status(500).send({ message: error.message });
	}
})

// Create route to get all books

app.get("/books", async (request, response) => {
	try {
		const books = await Book.find({});
		console.log(books);
		return response.status(200).json(books);

	} catch (error) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log("Connected to MongoDB");
		app.listen(PORT, () => {
			console.log(`Server listening on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	})