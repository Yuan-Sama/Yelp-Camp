<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
	const { campground } = data;
</script>

<svelte:head>
	<title>Yelp Camp - Edit Campground</title>
</svelte:head>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="mx-auto max-w-2xl">
		<div class="text-center">
			<h2 class="text-xl font-bold text-gray-800 dark:text-white sm:text-3xl">Edit Campground</h2>
		</div>

		<div
			class="relative z-10 mt-5 rounded-xl border bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900 sm:mt-10 md:p-10"
		>
			<form method="POST">
				<div class="mb-4 sm:mb-8">
					<label for="title" class="mb-2 block text-sm font-medium dark:text-white">Title</label>
					<input
						type="text"
						id="title"
						class="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
						placeholder="Title"
						value={campground.title}
						name="title"
					/>
				</div>
				<div class="mb-4 sm:mb-8">
					<label for="location" class="mb-2 block text-sm font-medium dark:text-white">
						Location
					</label>
					<input
						type="text"
						id="location"
						class="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
						placeholder="Location"
						value={campground.location}
						name="location"
					/>
				</div>

				<div class="mb-4 sm:mb-8">
					<label for="image" class="mb-2 block text-sm font-medium dark:text-white">
						Image Url
					</label>
					<input
						type="text"
						id="image"
						class="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
						placeholder="https://your.image.png"
						value={campground.image}
						name="image"
					/>
				</div>

				<div class="mb-4 sm:mb-8">
					<label for="price" class="mb-2 block text-sm font-medium dark:text-white">Price</label>
					<div class="flex rounded-lg shadow-sm">
						<span
							class="inline-flex min-w-fit items-center rounded-s-md border border-e-0 border-gray-200 bg-gray-50 px-4 text-sm text-gray-500 dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-400"
							>$</span
						>
						<input
							type="number"
							id="price"
							class="block w-full rounded-e-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
							placeholder="$0.00"
							value={campground.price}
							name="price"
						/>
					</div>
				</div>

				<div>
					<label for="description" class="mb-2 block text-sm font-medium dark:text-white">
						Description
					</label>
					<div class="mt-1">
						<textarea
							id="description"
							name="description"
							rows="5"
							class="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
							placeholder="Leave your description here..."
							value={campground.description}
						></textarea>
					</div>
				</div>

				<div class="mt-6 flex justify-between gap-10">
					<a
						class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-red-600 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:bg-red-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
						href="/campgrounds"
					>
						Back to Campgrounds
					</a>
					<button
						type="submit"
						class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-blue-600 px-4 py-3 text-sm font-medium text-blue-600 hover:bg-blue-700 hover:text-white focus:border-transparent focus:bg-blue-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
					>
						Update
					</button>
				</div>
			</form>
		</div>
		<!-- End Card -->
	</div>
</div>
