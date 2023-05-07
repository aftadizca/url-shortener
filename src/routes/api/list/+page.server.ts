import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { getKvValue, setKvValue } from '$lib/workers'


/** @type {import('./$types').PageLoad} */
export async function load(context: any) {
    // const url = await getKvValue(context, context.params.slug)
    // // console.log(url)
    // if (url === null) {
    //     throw error(404, 'Not found');
    // }
    // throw redirect(302, url)

}

/** @type {import('./$types').Actions} */
export const actions = {
    add: async (ctx) => {
        const data = await ctx.request.formData();
        console.log(data)
        const name = data.get('name');
        const url = data.get('url')?.toString();
        setKvValue(ctx, name, url)
    },
};