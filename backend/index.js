import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRouter from "./routes/booksRoute.js";

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (request, response) => {
	console.log(request);
	return response.status(234).send("Welcome to MERN tutorial");
})

app.use("/books", bookRouter);
mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log("App Connected to MongoDB");
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		})
	})
	.catch((error) => {
		console.log(error);
	});
