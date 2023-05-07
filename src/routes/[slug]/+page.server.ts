import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { getKvValue } from '$lib/workers'

/** @type {import('./$types').PageLoad} */
export async function load(context: any) {

    const kvData = await getKvValue(context, context.params.slug)
    console.log(kvData)

    if (kvData !== null) {
        throw redirect(302, kvData.metadata.url)

    }
    throw error(404, 'Not found');



}