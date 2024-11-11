<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();

	const { campgrounds } = data;
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
					alt="Campground preview"
				/>
			</div>
			<div class="flex flex-wrap">
				<div class="flex h-full flex-col p-4 sm:p-7">
					<h3 class="text-lg font-bold text-gray-800 dark:text-white">{campground.title}</h3>
					<p class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
						{campground.location}
					</p>
					<p class="mt-1 text-gray-500 dark:text-neutral-400">
						{campground.description}
					</p>
					<a
						class="mt-2 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 md:ml-auto md:w-1/2"
						href="/campgrounds/{campground._id}"
					>
						More Detail
					</a>
				</div>
			</div>
		</div>
	{/each}
</div>
