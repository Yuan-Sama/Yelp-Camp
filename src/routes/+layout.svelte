<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Yelp Camp</title>
</svelte:head>

{@render children()}
