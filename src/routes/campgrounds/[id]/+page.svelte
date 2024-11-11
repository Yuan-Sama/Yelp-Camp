<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
	const { campground } = data;
</script>

<svelte:head>
	<title>Yelp Camp - Campground: {campground.title}</title>
</svelte:head>

<!-- <div
	class="rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70 sm:flex"
>
	<div
		class="relative w-full shrink-0 overflow-hidden rounded-t-xl pt-[40%] sm:max-w-60 sm:rounded-s-xl md:max-w-xs md:rounded-se-none"
	>
		<img
			class="absolute start-0 top-0 size-full object-cover"
			src={campground.image}
			alt="Campground"
		/>
	</div>
	<div class="flex flex-wrap">
		<div class="flex h-full flex-col p-4 sm:p-7">
			<h3 class="text-lg font-bold text-gray-800 dark:text-white">{campground.title}</h3>
			<p class="my-2 text-xs font-medium text-gray-500 dark:text-neutral-500">
				{campground.location}
			</p>
			<p class="text-md my-2 font-semibold text-gray-700 dark:text-neutral-400">
				${campground.price}/night
			</p>
			<p class="mt-1 text-gray-500 dark:text-neutral-400">
				{campground.description}
			</p>
			<div class="mt-5 sm:mt-auto">
				<p class="text-xs text-gray-500 dark:text-neutral-500">Last updated 5 mins ago</p>
			</div>
			<div class="mt-6 flex justify-between gap-10">
				<form class="w-full" action="?/delete" method="post">
					<button
						class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-red-600 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:bg-red-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
					>
						Delete
					</button>
				</form>
				<a
					type="submit"
					class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-stone-600 px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-700 hover:text-white focus:border-transparent focus:bg-stone-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-stone-300 dark:text-white"
					href="/campgrounds/{campground._id}/edit"
				>
					Edit
				</a>
			</div>
		</div>
	</div>
</div> -->

<div class="flex flex-col md:flex-row">
	<div class="w-full md:w-4/12">
		<img class="" src={campground.image} alt="Campground" />
	</div>
	<div class="w-full md:w-8/12">
		<div class="flex h-full flex-col px-1 pb-5 pt-5 sm:p-7 md:p-4">
			<h3 class="text-lg font-bold text-gray-800 dark:text-white">{campground.title}</h3>
			<p class="my-2 text-xs font-medium text-gray-500 dark:text-neutral-500">
				{campground.location}
			</p>
			<p class="text-md my-2 font-semibold text-gray-700 dark:text-neutral-400">
				${campground.price}/night
			</p>
			<p class="mt-1 text-gray-500 dark:text-neutral-400">
				{campground.description}
			</p>
			<div class="mt-5 sm:mt-auto">
				<p class="text-xs text-gray-500 dark:text-neutral-500">Created 5 mins ago</p>
			</div>
			<div class="mt-6 flex justify-between gap-10">
				<form class="w-full" action="?/delete" method="post">
					<button
						class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-red-600 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:bg-red-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
					>
						Delete
					</button>
				</form>
				<a
					type="submit"
					class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-stone-600 px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-700 hover:text-white focus:border-transparent focus:bg-stone-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-stone-300 dark:text-white"
					href="/campgrounds/{campground._id}/edit"
				>
					Edit
				</a>
			</div>
		</div>
	</div>
</div>
