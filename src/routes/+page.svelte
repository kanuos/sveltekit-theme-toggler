<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Theme toggler - SvelteKit SSR</title>
</svelte:head>

<main>
	<section>
		<h1>Hello from SvelteKit</h1>
		<form method="post">
			<button type="submit" class="inline-block"> {data.btnLabel} </button>
		</form>
	</section>
</main>

<style>
	main {
		height: 100vh;
		display: grid;
		place-items: center;
	}
</style>
