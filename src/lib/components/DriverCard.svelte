<script lang="ts">
	import { assets } from '$app/paths';

	interface Props {
		name: string;
		link?: string;
		linkText?: string;
	}

	let { name, link, linkText } = $props();
</script>

<div class="card">
	<div class="card-header">
		<div class="driver-name">
			{@html name.replace(' ', '<br>')}
		</div>
		<div class="helmet-icon"><img src="{assets}/helmet.jpg" alt="Helmet" /></div>
	</div>
	{#if link}
		<div class="logos">
			<a href={link} target="_blank">{linkText || link}</a>
		</div>
	{/if}
</div>