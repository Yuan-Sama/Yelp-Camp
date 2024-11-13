import mongoose from 'mongoose';

const CampgroundSchema = new mongoose.Schema({
	title: String,
	price: String,
	description: String,
	location: String,
	image: String
});

// https://stackoverflow.com/questions/67042963/cannot-overwrite-mongoose-model-once-compiled-with-nextjs
const Campground = mongoose.models.Campground || mongoose.model('Campground', CampgroundSchema);

export { Campground };
