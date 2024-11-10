<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
	const { campground } = data;
</script>

<h1 class="text-3xl font-semibold">{campground.title}</h1>
<h3 class="text-xl">{campground.location}</h3>
