export const COOKIE_NAME = "sveltekit-theme"

export enum AllowedThemes {
    light = "light", dark = "dark"
}

export const cookieOptions = {
    path: '/',
    maxAge: 10000000000,
    httpOnly: false
}