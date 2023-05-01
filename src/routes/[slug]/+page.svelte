<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	onMount(() => goto(data.dest, { replaceState: true }));
</script>

<div>{data}</div>
