<script>
	import DriverCard from '$lib/components/DriverCard.svelte';
	import RaceResultsTable from '$lib/components/RaceResultsTable.svelte';
	import { results2025, results2026 } from '$lib/data/raceResults';
</script>

<section class="section">
	<h2>The Drivers</h2>
	<div class="card-container">
		<DriverCard
			name="Chris Stewart"
			link="https://youtube.com/@ChrisStewartTV"
			linkText="youtube.com/@ChrisStewartTV"
		/>
		<DriverCard
			name="Peter Nodwell"
			link="https://youtube.com/@SDReSports73"
			linkText="youtube.com/@SDReSports73"
		/>
		<DriverCard
			name="Nick Mazza"
			link="https://youtube.com/@NickMazza_3"
			linkText="youtube.com/@NickMazza_3"
		/>
		<DriverCard 
			name="Collin Bourdon" 
			link="" 
			linkText=""
		/>
	</div>
</section>

<section class="section">
	<h2>Race Results</h2>

	<RaceResultsTable year="2026" results={results2026} />
	<RaceResultsTable year="2025" results={results2025} />
</section>

<section class="section" style="display: none;">
	<div class="join-cta">
		<h2>Join the Grid</h2>
		<p>team@yourdomain.com</p>
		<a href="https://discord.com" target="_blank" class="discord-btn">JOIN OUR DISCORD</a>
	</div>
</section>
