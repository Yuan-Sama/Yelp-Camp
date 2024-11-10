import { Campground } from '$server/model';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const campground = await Campground.findById(params.id)
		.transform((doc) => Object.assign({}, doc?.toObject(), { _id: doc?._id.toHexString() }))
		.exec();

	if (!campground) error(404, { message: 'Campground not found' });

	return {
		campground
	};
}
