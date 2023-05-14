
import { setURL, getURL, getAllURL, deleteURL } from '$lib/firebase'
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


/** @type {import('./$types').PageServerLoad} */
export async function load(context: any) {

    const list = getAllURL()
    return { list: list }
    // // // console.log(url)
    // // if (url === null) {
    // //     throw error(404, 'Not found');
    // // }
    // // throw redirect(302, url)

}

export const actions: Actions = {
    add: async (event) => {
        const formData = await event.request.formData();
        // console.log(data)
        const name = formData.get('name')?.toString();
        const url = formData.get('url')?.toString();
        if (name && url) {
            setURL(name, url)
            return { message: "Success" }
        }
        return { message: "Failed to add url", error: true }
    },
    delete: async (ctx: { request: { formData: () => any; }; }) => {
        const data = await ctx.request.formData();
        // console.log(data)
        const name = data.get('name');
        deleteURL(name)

    },
};