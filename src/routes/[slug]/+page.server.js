import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { urls } from '../../lib/url-list';

// /** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const [r] = urls.filter(item => item.source === params.slug)

    // console.log(params)
    console.log(r)
    if (r) {
        throw redirect(308, r.destination)
    }

    throw error(404, 'Not found');
}