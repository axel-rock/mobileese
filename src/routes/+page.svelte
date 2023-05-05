<script lang="ts">
	import type { PageData } from './$types';
	import { browser } from '$app/environment';
</script>

<div>
	<p>Scan this code to create a project on your phone.</p>
	{#if browser}
		<img
			src={'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
				encodeURIComponent(`${window.location.href}/project/4bVvBx4hTIfIjpukjQkrduYElqF2`)}
			alt=""
		/>
	{/if}
	<small>
		<a href="/project/4bVvBx4hTIfIjpukjQkrduYElqF2">Or, do it from your computer</a>
	</small>
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
