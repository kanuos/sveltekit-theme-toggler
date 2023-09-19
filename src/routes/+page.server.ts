import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { AllowedThemes, COOKIE_NAME, cookieOptions } from '$lib/utils';

export const load: PageServerLoad = async ({ cookies }) => {
	const currentTheme = cookies.get(COOKIE_NAME);
	return {
		btnLabel: `Toggle to ${
			currentTheme === AllowedThemes.dark ? AllowedThemes.light : AllowedThemes.dark
		} theme`
	};
};

export const actions: Actions = {
	default: async ({ cookies, url }) => {
		const currentTheme = cookies.get(COOKIE_NAME);

		const newTheme =
			currentTheme === AllowedThemes.light ? AllowedThemes.dark : AllowedThemes.light;

		cookies.set(COOKIE_NAME, newTheme, cookieOptions);
		throw redirect(303, url);
	}
};
