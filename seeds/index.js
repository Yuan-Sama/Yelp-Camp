import mongoose from 'mongoose';
import cities from './cities.js';
import { places, descriptors } from './seedHelpers.js';
import { Campground } from '../src/server/model.js';

mongoose.connect(process.env.MONGO_DB_URL, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Database connected');
});

const sample = (/**@type {string[]} */ array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
	await Campground.deleteMany({});
	for (let i = 0; i < 50; i++) {
		const random1000 = Math.floor(Math.random() * 1000);
		const camp = new Campground({
			// @ts-ignore
			location: `${cities[random1000].city}, ${cities[random1000].state}`,
			title: `${sample(descriptors)} ${sample(places)}`
		});
		await camp.save();
	}
};

seedDB().then(() => {
	mongoose.connection.close();
	console.log('Seed successfully');
});
