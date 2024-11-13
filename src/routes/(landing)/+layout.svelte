<script>
	import Footer from '$blocks/Footer.svelte';
	import Header from '$blocks/Header.svelte';

	/** @type {{ children: import('svelte').Snippet }} */
	let { children } = $props();
</script>

<Header class="dark border-none !bg-transparent shadow-none" />

{@render children()}

<Footer class="fixed bottom-0 left-0 w-full bg-transparent" />
