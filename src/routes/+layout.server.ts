import { hydrateAuth, isSignedIn, generateAuthUrl } from 'svelte-google-auth/server';
import type { LayoutServerLoad } from './$types.js';
import { redirect, error } from '@sveltejs/kit';

const SCOPES = ['openid', 'profile', 'email'];

export const load: LayoutServerLoad = ({ locals, url }) => {
    if (!isSignedIn(locals) && url.pathname === '/') {
        throw redirect(302, generateAuthUrl(locals, url, SCOPES, url.pathname));
    }
    if (isSignedIn(locals) && locals.user.email !== "aftadizca@gmail.com") {
        throw error(403, "Access Denied");
    }

    // By calling hydateAuth, certain variables from locals are parsed to the client
    // allowing the client to access the user information and the client_id for login
    return { ...hydrateAuth(locals) };
};