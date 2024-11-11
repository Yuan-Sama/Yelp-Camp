import { Campground } from '$server/model';
import { redirect } from '@sveltejs/kit';

/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({ request, params }) => {
		const { id } = params;

		const updateCampground = Object.fromEntries(await request.formData());
		const campground = await Campground.findByIdAndUpdate(id, updateCampground);

		redirect(303, `/campgrounds/${campground?._id}`);
	}
};
