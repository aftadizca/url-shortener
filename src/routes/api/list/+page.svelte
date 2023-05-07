<script>
	import { Input, Label, Helper, Button } from 'flowbite-svelte';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	// we can access `data.posts` because it's returned from
	// the parent layout `load` function
</script>

<form method="POST" action="?/add">
	<div class="mb-2 max-w-sm">
		<div>
			<Label for="name" class="mb-2">NAME</Label>
			<Input name="name" class="mb-2" type="text" />
		</div>
		<div>
			<Label for="url" class="mb-2">URL</Label>
			<Input name="url" class="mb-2" type="text" />
		</div>
	</div>
	<Button type="submit">Add</Button>
</form>
<br />
{#if data.list}
	<Table>
		<TableHead>
			<TableHeadCell>Name</TableHeadCell>
			<TableHeadCell>Destination</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each data.list.keys as x}
				<TableBodyRow>
					<TableBodyCell>{x.name}</TableBodyCell>
					<TableBodyCell>{x.metadata.url}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
{/if}
