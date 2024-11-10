import { MONGO_DB_URL } from '$env/static/private';
import mongoose from 'mongoose';

mongoose.connect(MONGO_DB_URL, {});

const mongodb = mongoose.connection;

mongodb.on('error', console.error.bind(console, 'Connection error: '));
mongodb.once('open', () => {
	console.log('Database connected');
});
