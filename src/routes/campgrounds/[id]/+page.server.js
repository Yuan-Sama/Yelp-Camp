import { Campground } from '$server/model';
import { redirect } from '@sveltejs/kit';

/** @satisfies {import('./$types').Actions} */
export const actions = {
	delete: async ({ params }) => {
		const { id } = params;
		await Campground.findByIdAndDelete(id);
		redirect(303, '/campgrounds');
	}
};
