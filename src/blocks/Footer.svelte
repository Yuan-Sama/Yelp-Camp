<script>
	let { class: clazz = '' } = $props();
</script>

<footer class="mt-auto bg-gray-700 py-3 dark:bg-neutral-800{clazz ? ` ${clazz}` : ''}">
	<div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
		<p class="text-white">© {new Date().getFullYear()} YelpCamp</p>
	</div>
</footer>
