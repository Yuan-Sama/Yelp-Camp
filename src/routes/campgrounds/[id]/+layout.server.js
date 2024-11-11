import { Campground } from '$server/model';
import { error } from '@sveltejs/kit';
import mongoose from 'mongoose';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ params }) {
	const { id } = params;
	if (!mongoose.Types.ObjectId.isValid(id)) error(404, { message: 'Campground not found' });

	const campground = await Campground.findById(params.id)
		.transform((doc) => Object.assign({}, doc?.toObject(), { _id: doc?._id.toHexString() }))
		.exec();

	if (!campground) error(404, { message: 'Campground not found' });

	return {
		campground
	};
}
