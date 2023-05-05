<script lang="ts">
	import Project from '../../components/Project.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.projects as project}
	<Project {...project} />
{/each}
