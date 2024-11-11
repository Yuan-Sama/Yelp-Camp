import { MONGO_DB_URL } from '$env/static/private';
import mongoose from 'mongoose';

// @ts-ignore
mongoose.connect(MONGO_DB_URL, {});

const mongodb = mongoose.connection;

// @ts-ignore
mongodb.on('error', console.error.bind(console, 'Connection error: '));
// @ts-ignore
mongodb.once('open', () => {
	console.log('Database connected');
});
