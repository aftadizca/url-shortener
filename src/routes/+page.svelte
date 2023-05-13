<script lang="ts">
	import { Input, Label, Helper, Button } from 'flowbite-svelte';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		Chevron,
		DropdownDivider
	} from 'flowbite-svelte';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import type { PageData } from './$types.js';
	import { invalidateAll } from '$app/navigation';
	import { signIn, signOut, initialize } from 'svelte-google-auth/client';

	export let data: PageData;
	initialize(data, invalidateAll);

	// we can access `data.posts` because it's returned from
	// the parent layout `load` function
</script>

<Navbar let:hidden let:toggle class="!bg-secondary text-white rounded-lg mb-10">
	<NavBrand href="/">
		<img
			src="https://flowbite.com/docs/images/logo.svg"
			class="mr-3 h-6 sm:h-9"
			alt="Flowbite Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			ADW URL SHORTENER
		</span>
	</NavBrand>
	<div class="flex md:order-2">
		<Button gradient color="purpleToBlue" on:click={() => signOut()}>Sign Out</Button>
		<NavHamburger on:click={toggle} />
	</div>
</Navbar>

<!-- {data.auth.user?.name}
<Button size="sm" on:click={() => signOut()}>Sign Out</Button> -->

<form method="POST" action="?/add">
	<div class="flex mb-2 gap-3 justify-center">
		<div>
			<Input placeholder="Name" name="name" class="mb-2 !w-64" type="text" />
		</div>
		<div>
			<Input placeholder="URL" name="url" class="mb-2 !w-96" type="text" />
		</div>
		<div>
			<Button gradient color="purpleToBlue" type="submit">Add</Button>
		</div>
	</div>
</form>
<br />
{#if data.list}
	<div class="flex justify-center">
		<Table shadow class="min-w-[80vw] !rounded-lg !table-auto">
			<TableHead class="!bg-secondary h-14 !font-bold !text-lg !text-white">
				<TableHeadCell>Name</TableHeadCell>
				<TableHeadCell>Destination</TableHeadCell>
				<TableHeadCell />
			</TableHead>
			<TableBody>
				{#each data.list.keys as x}
					<TableBodyRow>
						<TableBodyCell>{x.name}</TableBodyCell>
						<TableBodyCell>{x.metadata.url}</TableBodyCell>
						<TableBodyCell class="!w-12"
							><form method="POST" action="?/delete">
								<Input name="name" class="mb-2" type="hidden" value={x.name} />
								<Button gradient color="purpleToBlue" type="submit" size="xs">Delete</Button>
							</form></TableBodyCell
						>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</div>
{/if}
