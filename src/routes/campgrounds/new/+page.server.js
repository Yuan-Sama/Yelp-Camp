import { Campground } from '$server/model';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const newCampground = Object.fromEntries(data);
		const campground = new Campground(newCampground);
		await campground.save();
		redirect(303, `/campgrounds/${campground._id.toHexString()}`);
	}
};
