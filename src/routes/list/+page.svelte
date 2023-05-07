<script>
	import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;

	// we can access `data.posts` because it's returned from
	// the parent layout `load` function
</script>

{#each data.list as v}
	<div>{url.source} --> {url.destination}</div>
{/each}
