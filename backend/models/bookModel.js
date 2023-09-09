import mongoose from 'mongoose';

// create a mongoose scheme called bookSchema

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	publishYear: {
		type: String,
		required: true
	},
},
	{ timestamps: true }

);

export const Book = mongoose.model('Cat', bookSchema);
