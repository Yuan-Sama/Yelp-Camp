import { Schema, model } from 'mongoose';

const CampgroundSchema = new Schema({
	title: String,
	price: String,
	description: String,
	location: String,
	image: String
});

const Campground = model('Campground', CampgroundSchema);

export { Campground };
