<script>
	import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;

	// we can access `data.posts` because it's returned from
	// the parent layout `load` function
</script>

<form method="POST" action="?/add">
	<label>
		Name
		<input name="name" type="text" />
	</label>
	<label>
		Url
		<input name="url" type="text" />
	</label>
	<button>Add</button>
</form>
