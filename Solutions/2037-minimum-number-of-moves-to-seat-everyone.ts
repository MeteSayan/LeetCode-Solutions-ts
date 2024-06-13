function minMovesToSeat(seats: number[], students: number[]): number {
	seats.sort((a, b) => a - b);
	students.sort((a, b) => a - b);
	let result = 0;

	for (let x = 0; x < seats.length; x++) {
		result += Math.abs(seats[x] - students[x]);
	}

	return result;
}
