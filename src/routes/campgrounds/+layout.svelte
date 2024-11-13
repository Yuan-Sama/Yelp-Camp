<script>
	import Footer from '$blocks/Footer.svelte';
	import Header from '$blocks/Header.svelte';

	let { children } = $props();
</script>

<Header />

<main class="mt-16 shrink-0">
	<div class="mx-auto min-h-[40rem] max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
		{@render children()}
	</div>
</main>

<Footer />
