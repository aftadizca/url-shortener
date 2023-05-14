import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { getURL } from '$lib/firebase'

/** @type {import('./$types').PageLoad} */
export async function load(context: any) {

    const urlData = await (await getURL(context.params.slug)).data()
    // console.log(urlData)

    if (urlData !== undefined) {
        throw redirect(302, urlData.url)

    }
    throw error(404, 'Not found');



}