import { SvelteGoogleAuthHook } from 'svelte-google-auth/server';
import type { Handle } from '@sveltejs/kit';
import { CLIENT_SECRET } from '$env/static/private'

const auth = new SvelteGoogleAuthHook(JSON.parse(CLIENT_SECRET).web);

export const handle: Handle = async ({ event, resolve }) => {

    if (event.url.pathname.startsWith('/')) {
        // console.log("hooks trigerred")
        return await auth.handleAuth({ event, resolve })
    }
    // console.log("hooks not trigerred")

    const response = await resolve(event)
    return response
}