function numberOfEmployeesWhoMetTarget(
	hours: number[],
	target: number
): number {
	let result: number = 0;
	for (let x = 0; x < hours.length; x++) {
		if (hours[x] >= target) {
			result++;
		}
	}
	return result;
}
