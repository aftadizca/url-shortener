import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { urls } from '../../lib/url-list';

// /** @type {import('./$types').PageLoad} */
export function load(x) {
    // console.log(x)
    const [r] = urls.filter(item => item.source === x.params.slug)

    const test = x.platform.env.URL.get();



    // console.log(params)
    // console.log("assasas", r)
    if (r) {
        return { r: "sasaasas" }
        // throw redirect(308, r.destination)
    }
    return { r: test }

    // throw error(404, 'Not found');
}