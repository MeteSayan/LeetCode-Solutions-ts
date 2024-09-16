function findMinDifference(timePoints: string[]): number {
	let min = Infinity;
	const totalMinutesInDay = 1440;

	const minutesArray = timePoints
		.map((time) => {
			const [hours, minutes] = time.split(':').map(Number);
			return hours * 60 + minutes;
		})
		.sort((a, b) => a - b);

	for (let x = 1; x < minutesArray.length; x++) {
		min = Math.min(min, minutesArray[x] - minutesArray[x - 1]);
	}

	const circularDifference =
		totalMinutesInDay - minutesArray[minutesArray.length - 1] + minutesArray[0];
	min = Math.min(min, circularDifference);

	return min;
}
