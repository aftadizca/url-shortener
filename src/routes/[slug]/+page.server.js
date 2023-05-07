import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { urls } from '../../lib/url-list';

// /** @type {import('./$types').PageLoad} */
export async function load(x) {
    // console.log(x)
    // const [r] = urls.filter(item => item.source === x.params.slug)

    const url = await x.platform.env.URL.get(x.params.slug);



    // console.log(params)
    // console.log("assasas", r)

    // console.log(test)
    // test.then((/** @type {string} */ val) => { throw redirect(302, val) })

    // return { r: "https://www.youtube.com" }

    if (url === null) {
        throw error(404, 'Not found');
    }


    throw redirect(302, url)

}