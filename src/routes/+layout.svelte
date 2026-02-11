<script lang="ts">
	import '$lib/assets/styles.css';
	import logo from '$lib/assets/snb-logo-transparent-50-percent-scale.png';
	import icon from '$lib/assets/snb-logo-transparent.ico';
	let { children } = $props();
</script>

<div class="logo-container">
	<img src="{logo}" alt="Shake n Bake Racing Logo" />
</div>

<header>
	<link rel="icon" type="image/x-icon" href="{icon}" />
	<!--<h1>Shake n Bake Racing</h1>
    <p class="tagline">Hell. Yeah. Brother.</p>-->
</header>

<main>
	{@render children()}
</main>

<footer>Copyright © 2026 Shake n Bake Racing</footer>
