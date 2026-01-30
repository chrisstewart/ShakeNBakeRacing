export interface RaceResult {
	date: string;
	race: string;
	track: string;
	distance: string;
	result: string;
	split: string;
	sof: number | string;
	resultLink: string;
}

export const results2026: RaceResult[] = [
	{
		date: '1/18/2026',
		race: 'Daytona 24',
		track: 'Daytona',
		distance: '24 Hours',
		result: 'P2',
		split: '3 of 19',
		sof: 3018,
		resultLink:
			'https://members-ng.iracing.com/web/racing/results-stats/results?subsessionid=82804433'
	}
];

export const results2025: RaceResult[] = [
	{
		date: '12/27/2025',
		race: 'Global Endurance Tour',
		track: 'Sebring',
		distance: '6 Hours',
		result: 'P4',
		split: '3 of 13',
		sof: 2993,
		resultLink:
			'https://members-ng.iracing.com/web/racing/results-stats/results?subsessionid=82232051'
	}
];
