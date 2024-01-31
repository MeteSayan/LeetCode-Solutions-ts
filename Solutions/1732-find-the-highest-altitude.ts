function largestAltitude(gain: number[]): number {
	let max = 0;
	gain.unshift(0);
	for (let i = 1; i < gain.length; i++) {
		gain[i] += gain[i - 1];
		max = Math.max(max, gain[i]);
	}
	return max;
}
