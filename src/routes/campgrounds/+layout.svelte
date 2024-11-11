<script>
	import { page } from '$app/stores';

	let { children } = $props();
	const navigation = [
		{ link: '/', title: 'Home' },
		{ link: '/campgrounds', title: 'Campgrounds' },
		{ link: '/campgrounds/new', title: 'New Campground' }
	];
</script>

<header
	class="fixed left-0 top-0 z-50 flex max-h-24 w-full flex-wrap border-b border-gray-200 bg-white py-1 shadow-md dark:border-neutral-700 dark:bg-neutral-800 sm:flex-nowrap sm:justify-start md:flex-nowrap md:justify-start"
>
	<nav
		class="relative mx-auto w-full max-w-[85rem] px-4 py-2 sm:px-6 md:flex md:items-center md:justify-between md:gap-3 lg:px-8"
	>
		<div class="flex items-center justify-between gap-x-1">
			<a
				class="flex-none text-xl font-semibold text-black focus:opacity-80 focus:outline-none dark:text-white"
				href="/"
				aria-label="Brand"
			>
				YelpCamp
			</a>

			<!-- Collapse Button -->
			<button
				type="button"
				class="hs-collapse-toggle relative flex size-9 items-center justify-center rounded-lg border border-gray-200 text-[12px] font-medium text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 md:hidden"
				id="hs-header-base-collapse"
				aria-expanded="false"
				aria-controls="hs-header-base"
				aria-label="Toggle navigation"
				data-hs-collapse="#hs-header-base"
			>
				<svg
					class="hs-collapse-open:hidden size-4"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line
						x1="3"
						x2="21"
						y1="18"
						y2="18"
					/></svg
				>
				<svg
					class="hs-collapse-open:block hidden size-4 shrink-0"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
				>
				<span class="sr-only">Toggle navigation</span>
			</button>
			<!-- End Collapse Button -->
		</div>

		<!-- Collapse -->
		<div
			id="hs-header-base"
			class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
			aria-labelledby="hs-header-base-collapse"
		>
			<div
				class="max-h-[75vh] overflow-hidden overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2"
			>
				<div class="flex flex-col gap-0.5 py-2 md:flex-row md:items-center md:gap-1 md:py-0">
					<div class="grow">
						<div class="flex flex-col gap-0.5 md:flex-row md:items-center md:justify-end md:gap-1">
							{#each navigation as navItem}
								<a
									class="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-200 focus:bg-gray-100 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700{$page
										.url.pathname === navItem.link
										? ' bg-gray-200 dark:bg-neutral-700'
										: ''}"
									href={navItem.link}
								>
									{navItem.title}
								</a>
							{/each}
						</div>
					</div>

					<!-- <div class="my-2 md:mx-2 md:my-0">
						<div
							class="h-px w-full bg-gray-100 md:h-4 md:w-px md:bg-gray-300 dark:bg-neutral-700"
						></div>
					</div> -->

					<!-- Button Group -->
					<!-- <div class=" flex flex-wrap items-center gap-x-1.5">
						<a
							class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-2.5 py-[7px] text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
							href="#"
						>
							Sign in
						</a>
						<a
							class="inline-flex items-center rounded-lg bg-blue-600 px-2.5 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
							href="#"
						>
							Get started
						</a>
					</div> -->
					<!-- End Button Group -->
				</div>
			</div>
		</div>
		<!-- End Collapse -->
	</nav>
</header>

<!-- ========== MAIN CONTENT ========== -->
<main class="mt-16 shrink-0">
	<div class="mx-auto min-h-[40rem] max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
		{@render children()}
	</div>
</main>
<!-- ========== END MAIN CONTENT ========== -->

<footer class="mt-auto bg-gray-700 py-3 dark:bg-neutral-800">
	<div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
		<p class="text-white">© {new Date().getFullYear()} YelpCamp</p>
	</div>
</footer>

<!-- ========== END FOOTER ========== -->
