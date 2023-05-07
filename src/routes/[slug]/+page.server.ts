import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { getKvValue } from '$lib/workers'

/** @type {import('./$types').PageLoad} */
export async function load(context: any) {

    // console.log(x)
    // const [r] = urls.filter(item => item.source === x.params.slug)

    // const url = await context?.platform?.env?.URL.get(context.params.slug);
    // setKvValue(context, "one", "ONEaaSASASASASAS")
    // setKvValue(context, "two", "TWOaaSASASASASAS")
    const url = await getKvValue(context, context.params.slug)



    console.log(url)
    // console.log("assasas", r)

    // console.log(test)
    // test.then((/** @type {string} */ val) => { throw redirect(302, val) })

    // return { r: "https://www.youtube.com" }

    if (url === null) {
        throw error(404, 'Not found');
    }


    throw redirect(302, url)

}