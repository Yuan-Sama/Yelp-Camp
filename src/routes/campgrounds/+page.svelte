<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();

	const { campgrounds } = data;

	/**
	 * @param {string | null | undefined} description
	 */
	function readMore(description, length = 255) {
		if (!description) return '';
		return `${description.substring(0, length)}...`;
	}
</script>

<svelte:head>
	<title>Yelp Camp - Campgrounds</title>
</svelte:head>

<div class="mx-auto max-w-2xl pb-6 pt-5 text-center lg:pb-16">
	<h2 class="text-2xl font-bold dark:text-white sm:text-3xl md:text-4xl">Campgrounds</h2>
</div>

<div class="mx-auto space-y-7 sm:max-w-2xl md:max-w-4xl">
	{#each campgrounds as campground}
		<div
			class="group rounded-xl border bg-white shadow-sm hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70 sm:flex"
		>
			<div
				class="relative w-full shrink-0 overflow-hidden rounded-t-xl pt-[40%] sm:max-w-60 sm:rounded-s-xl md:w-4/12 md:max-w-xs md:rounded-se-none"
			>
				<img
					class="absolute start-0 top-0 size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
					src={campground.image}
					alt="Preview"
				/>
			</div>
			<div class="flex flex-1 flex-wrap">
				<div class="flex h-full flex-1 flex-col justify-center p-4 sm:p-7">
					<h3 class="text-lg font-bold text-gray-800 dark:text-white">{campground.title}</h3>
					<p class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
						{campground.location}
					</p>

					<p class="text-md my-2 font-semibold text-gray-700 dark:text-neutral-400">
						${campground.price}/night
					</p>
					<p class="mt-1 text-gray-500 dark:text-neutral-400">
						{readMore(campground.description)}
					</p>
					<a
						class="mt-2 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 md:mr-auto md:w-2/3"
						href="/campgrounds/{campground._id}"
					>
						View {campground.title}
					</a>
				</div>
			</div>
		</div>
	{/each}
</div>
