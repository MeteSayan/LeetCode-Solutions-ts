function busyStudent(
	startTime: number[],
	endTime: number[],
	queryTime: number
): number {
	let ct = 0;

	for (let x = 0; x < startTime.length; x++) {
		if (startTime[x] <= queryTime && queryTime <= endTime[x]) {
			ct++;
		}
	}

	return ct;
}
