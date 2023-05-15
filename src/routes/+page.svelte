<script lang="ts">
	import { Input, Label, Alert, Button } from 'flowbite-svelte';
	import { Navbar, NavBrand, Toast, NavHamburger } from 'flowbite-svelte';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import type { ActionData, PageData } from './$types.js';
	import { invalidateAll } from '$app/navigation';
	import { signOut, initialize } from 'svelte-google-auth/client';
	import { slide } from 'svelte/transition';

	export let data: PageData;
	export let form: ActionData;
	// console.log('data', data);
	// console.log('form', form);
	let name: string, url: string;
	initialize(data, invalidateAll);

	let show = false;
	let counter = 6;

	function trigger() {
		show = true;
		counter = 6;
		timeout();
	}
	function timeout() {
		if (--counter > 0) {
			return setTimeout(timeout, 1000);
		}
		show = false;
	}
	$: console.log(form);

	$: {
		if (form !== null) {
			trigger();
		}
	}

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

<Toast class="absolute bottom-5 right-5" simple transition={slide} bind:open={show}>
	<svelte:fragment slot="icon">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
	</svelte:fragment>
	{form?.message}
</Toast>

<form method="POST" action="?/add">
	<div class="grid grid-cols-1 lg:grid-cols-4 gap-1 justify-center">
		<div />
		<div>
			<Input placeholder="Name" name="name" class="mb-2 " type="text" bind:value={name} />
		</div>
		<div>
			<Input placeholder="URL" name="url" class="mb-2 " type="text" bind:value={url} />
		</div>
		<div>
			<Button disabled={!(name && url)} gradient color="purpleToBlue" type="submit">Add</Button>
		</div>
		<div />
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
				{#each data.list as { name, url }}
					<TableBodyRow>
						<TableBodyCell>{name}</TableBodyCell>
						<TableBodyCell>{url}</TableBodyCell>
						<TableBodyCell class="!w-12"
							><form method="POST" action="?/delete">
								<Input name="name" class="mb-2" type="hidden" value={name} />
								<Button gradient color="purpleToBlue" type="submit" size="xs">Delete</Button>
							</form></TableBodyCell
						>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</div>
{/if}
