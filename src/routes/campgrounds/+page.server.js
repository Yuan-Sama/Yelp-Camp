import { Campground } from '$server/model';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const campgrounds = await Campground.find()
		.transform((doc) => doc.map((c) => Object.assign({}, c.toObject(), { _id: c._id.toString() })))
		.exec();

	return {
		campgrounds
	};
}
