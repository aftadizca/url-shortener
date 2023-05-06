<script>
	import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
	// we can access `data.posts` because it's returned from
	// the parent layout `load` function
</script>

<div />
