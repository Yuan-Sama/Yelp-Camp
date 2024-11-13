import { Campground } from '$server/model';
import { CampgroundModel } from '$server/model.validator';
import { fail, redirect } from '@sveltejs/kit';

/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({ request, params }) => {
		const { id } = params;
		const updateCampground = Object.fromEntries(await request.formData());
		const { error: err } = CampgroundModel.validate(updateCampground, { abortEarly: false });

		if (err) {
			const errors = err.details
				.map((e) => ({ [e.path.join('.')]: e.message }))
				.reduce((prev, next) => Object.assign(next, prev), {});

			const validator = Object.keys(updateCampground)
				.map((k) => {
					return {
						[k]: {
							submittedValue: errors[k] ? undefined : updateCampground[k],
							error: errors[k]
						}
					};
				})
				.reduce((prev, next) => Object.assign(next, prev), {});

			return fail(400, { validator });
		}

		const campground = await Campground.findByIdAndUpdate(id, updateCampground);

		redirect(303, `/campgrounds/${campground?._id}`);
	}
};
