<script lang="ts">
	import type { LayoutData } from './$types';
	import { assets, base } from '$app/paths';

	export let data: LayoutData;
</script>

<header class="container">
	<a href="{base}/">
		<img src="{assets}/logo.svg" alt="" />
	</a>

	<a href="{base}/admin">Admin</a>
</header>

<main>
	<slot />
</main>

<style global>
	@import '../css/app.css';
	header {
		background-color: #002c5b;
		color: #fff;
		padding: 1rem;
	}

	header img {
		height: 26px;
		width: 150px;
	}
</style>
