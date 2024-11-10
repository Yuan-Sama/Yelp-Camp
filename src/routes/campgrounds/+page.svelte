<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();

	const { campgrounds } = data;
</script>

<h1 class="text-3xl font-semibold">All Campgrounds</h1>
<ul>
	{#each campgrounds as campground}
		<li>{campground.title}</li>
	{/each}
</ul>
