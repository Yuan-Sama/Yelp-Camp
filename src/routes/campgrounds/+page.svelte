<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();

	const { campgrounds } = data;
</script>

<svelte:head>
	<title>Yelp Camp - Campgrounds</title>
</svelte:head>

<h1 class="text-3xl font-semibold">All Campgrounds</h1>
<div>
	<a href="/campgrounds/new">Add Campground</a>
</div>
<ul>
	{#each campgrounds as campground}
		<li><a href="/campgrounds/{campground._id}">{campground.title}</a></li>
	{/each}
</ul>
