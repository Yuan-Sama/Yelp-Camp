import { Campground } from '$server/model';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const campground = new Campground({ title: 'My backyard', description: "It's so beautiful." });
	await campground.save();
	return new Response(JSON.stringify(campground));
}
