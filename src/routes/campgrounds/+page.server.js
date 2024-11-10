import { Campground } from '$server/model';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const campgrounds = await Campground.find()
		.transform((doc) => {
			return doc.map((c) => ({
				_id: c._id.toString(),
				title: c.title,
				description: c.description,
				price: c.price,
				location: c.location
			}));
		})
		.exec();

	console.log(campgrounds);
	return {
		campgrounds
	};
}
