import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();
app.use(express.json());


app.get("/", (request, response) => {
	console.log(request);
	return response.status(234).send("Welcome to MERN tutorial");
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
})