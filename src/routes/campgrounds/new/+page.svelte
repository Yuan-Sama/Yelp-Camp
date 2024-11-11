<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<svelte:head>
	<title>Yelp Camp - Create new campground</title>
</svelte:head>

<h2 class="semi-bold text-2xl">Create new campground</h2>
<form method="post">
	<div class="my-3">
		<label for="title">Title</label>
		<input class="border border-solid border-stone-400" type="text" name="title" id="title" />
	</div>
	<div class="mb-3">
		<label for="location">Location</label>
		<input class="border border-solid border-stone-400" type="text" name="location" id="location" />
	</div>
	<button class="bg-slate-200">Create</button>
</form>

<div class="mt-10">
	<a href="/campgrounds">All Campgrounds</a>
</div>
