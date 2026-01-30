<script lang="ts">
	import '../lib/assets/styles.css';
	import { assets } from '$app/paths';
	let { children } = $props();
</script>

<div class="logo-container">
	<img src="{assets}/snb-logo-transparent.png" alt="Shake n Bake Racing Logo" />
</div>

<header>
	<!--<h1>Shake n Bake Racing</h1>
    <p class="tagline">Hell. Yeah. Brother.</p>-->
</header>

<main>
	{@render children()}
</main>

<footer>Copyright © 2026 Shake n Bake Racing</footer>
