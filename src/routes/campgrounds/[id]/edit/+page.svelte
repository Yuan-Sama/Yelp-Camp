<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
	const { campground } = data;
</script>

<svelte:head>
	<title>Yelp Camp - Edit Campground</title>
</svelte:head>

<h2 class="semi-bold text-2xl">Edit Campground</h2>
<form method="post">
	<div class="my-3">
		<label for="title">Title</label>
		<input
			class="border border-solid border-stone-400"
			type="text"
			name="title"
			id="title"
			value={campground.title}
		/>
	</div>
	<div class="mb-3">
		<label for="location">Location</label>
		<input
			class="border border-solid border-stone-400"
			type="text"
			name="location"
			id="location"
			value={campground.location}
		/>
	</div>
	<button class="bg-slate-200">Update</button>
</form>

<div class="mt-10">
	<a href="/campgrounds">Back to Campgrounds</a>
</div>
