<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { error, redirect } from '@sveltejs/kit';

	/** @type {import('./$types').PageData} */
	export let data;
	console.log(JSON.stringify(data));
	if (browser) {
		if (data.url === null) {
			throw error(404);
		}
		window.location = data.url;
	}
	// redirect(302, data.r);
	// we can access `data.posts` because it's returned from
	// the parent layout `load` function
</script>

<div />
