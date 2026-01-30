<script lang="ts">
	let { children } = $props();
</script>

<div class="logo-container">
    <img src="/src/lib/assets/snb-logo-transparent.png" alt="Shake n Bake Racing Logo">
</div>

<header>
    <!--<h1>Shake n Bake Racing</h1>
    <p class="tagline">Hell. Yeah. Brother.</p>-->
</header>

<main>

{@render children()}

</main>

<footer>
    Copyright © 2026 Shake n Bake Racing
</footer>