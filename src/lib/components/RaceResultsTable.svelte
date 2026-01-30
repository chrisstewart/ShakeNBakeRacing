<script lang="ts">
	import type { RaceResult } from '$lib/data/raceResults';

	interface Props {
		year: string | number;
		results: RaceResult[];
	}

	let { year, results }: Props = $props();
</script>

<div class="year-group">
	<div class="year-heading">{year}</div>
	<table class="race-results-table">
		<thead>
			<tr>
				<th>Date</th>
				<th>Race</th>
				<th>Track</th>
				<th>Distance</th>
				<th>Result</th>
				<th>Split</th>
				<th>SoF</th>
				<th>iRacing</th>
			</tr>
		</thead>
		<tbody>
			{#each results as row}
				<tr>
					<td data-label="Date">{row.date}</td>
					<td data-label="Race">{row.race}</td>
					<td data-label="Track">{row.track}</td>
					<td data-label="Distance">{row.distance}</td>
					<td data-label="Result">{row.result}</td>
					<td data-label="Split">{row.split}</td>
					<td data-label="SoF">{row.sof}</td>
					<td data-label="iRacing">
						<a href={row.resultLink} target="_blank">Results</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
