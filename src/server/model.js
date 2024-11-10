import { Schema, model } from 'mongoose';

const CampgroundSchema = new Schema({
	title: String,
	price: String,
	description: String,
	location: String
});

const CampGround = model('Campground', CampgroundSchema);

export { CampGround };
