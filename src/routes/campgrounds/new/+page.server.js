import { CampgroundModel } from '$server/model.validator';
import { Campground } from '$server/model';
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const newCampground = Object.fromEntries(data);
		const { error: err } = CampgroundModel.validate(newCampground, { abortEarly: false });

		if (err) {
			const errors = err.details
				.map((e) => ({ [e.path.join('.')]: e.message }))
				.reduce((prev, next) => Object.assign(next, prev), {});

			const validator = Object.keys(newCampground)
				.map((k) => {
					return {
						[k]: {
							submittedValue: newCampground[k],
							error: errors[k]
						}
					};
				})
				.reduce((prev, next) => Object.assign(next, prev), {});

			return fail(400, { validator });
		}

		const campground = new Campground(newCampground);
		await campground.save();
		redirect(303, `/campgrounds/${campground._id}`);
	}
};
