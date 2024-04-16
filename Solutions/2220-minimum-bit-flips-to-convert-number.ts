function minBitFlips(start: number, goal: number): number {
	if (start === goal) return 0;

	let startBits = start.toString(2);
	let goalBits = goal.toString(2);
	let ct = 0;

	const maxLength = Math.max(startBits.length, goalBits.length);

	startBits = startBits.padStart(maxLength, '0');
	goalBits = goalBits.padStart(maxLength, '0');

	for (let x = 0; x < startBits.length; x++) {
		if (startBits[x] !== goalBits[x]) {
			ct++;
		}
	}

	return ct;
}
