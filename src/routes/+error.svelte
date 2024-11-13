<script>
	import { page } from '$app/stores';
	import Footer from '$blocks/Footer.svelte';
	import Header from '$blocks/Header.svelte';
</script>

<Header />

<main class="mt-16 shrink-0">
	<div class="mx-auto min-h-[40rem] max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
		<div class="px-4 py-10 text-center sm:px-6 lg:px-8">
			<h1 class="block text-7xl font-bold text-gray-800 dark:text-white sm:text-9xl">
				{$page.status}
			</h1>
			<p class="mt-3 text-gray-600 dark:text-neutral-400">
				{$page.error?.message ?? 'Oops, something went wrong.'}
			</p>
			<p class="mt-3 text-gray-600 dark:text-neutral-400">Sorry, we couldn't find your page.</p>
			<div class="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
				<a
					class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
					href="/campgrounds"
				>
					<svg
						class="size-4 shrink-0"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg
					>
					Back to Campgrounds
				</a>
			</div>
		</div>
	</div>
</main>

<Footer />
