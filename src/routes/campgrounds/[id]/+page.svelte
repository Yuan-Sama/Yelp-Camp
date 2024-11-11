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
<img src={campground.image} alt="Campground" />
<p>
	{campground.description}
</p>

<div class="mt-5">
	<a href="/campgrounds/{campground._id}/edit">Edit</a>
</div>
<div class="mt-5">
	<form action="?/delete" method="post">
		<button>Delete</button>
	</form>
</div>
<div class="mt-5">
	<a href="/campgrounds">All Campgrounds</a>
</div>
