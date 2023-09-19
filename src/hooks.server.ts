import type { Handle } from "@sveltejs/kit"
import { AllowedThemes, COOKIE_NAME, cookieOptions } from "$lib/utils";


export const handle: Handle = async ({ event, resolve }) => {
    const preference = event.cookies.get(COOKIE_NAME);

    if (!preference) {
        event.cookies.set(COOKIE_NAME, AllowedThemes.light, cookieOptions)
    }

    // add the existing preference if present or light as the default theme
    const response = await resolve(event, {
        transformPageChunk: async ({ html }) => html.replace(`data-theme=""`, `data-theme="${preference}"`)
    })
    return response
}

