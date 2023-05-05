<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	export const user = data.user;
	const url = encodeURIComponent(window.location.href);
</script>

<div>
	<p>Scan this code to create a project on your phone.</p>
	{#if user}
		<img
			src={'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
				encodeURIComponent(`${window.location.href}/project/${user.user.uid}`)}
			alt=""
		/>
		<small>
			<a href="/project/{user.user.uid}">Or, do it from your computer</a>
		</small>
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 1rem;
		height: 100%;
	}

	img {
		width: 200px;
		height: 200px;
	}
</style>
