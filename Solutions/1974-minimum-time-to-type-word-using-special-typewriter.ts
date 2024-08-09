function minTimeToType(word: string): number {
	let time = 0;
	let currentPos = 'a';

	for (let char of word) {
		const clockwiseDistance = Math.abs(
			char.charCodeAt(0) - currentPos.charCodeAt(0)
		);
		const counterClockwiseDistance = 26 - clockwiseDistance;
		time += Math.min(clockwiseDistance, counterClockwiseDistance) + 1;
		currentPos = char;
	}

	return time;
}
