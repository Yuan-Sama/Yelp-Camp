<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
	const { campground } = data;
</script>

<svelte:head>
	<title>Yelp Camp - Campground: {campground.title}</title>
</svelte:head>

<h1 class="text-3xl font-semibold">{campground.title}</h1>
<h3 class="text-xl">{campground.location}</h3>

<a href="/campgrounds">All campgrounds</a>
