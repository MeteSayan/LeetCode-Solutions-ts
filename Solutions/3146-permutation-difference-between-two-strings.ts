function findPermutationDifference(s: string, t: string): number {
	const map = new Map<string, number>();

	for (let x = 0; x < s.length; x++) {
		let sValue = map.get(s[x]);
		if (sValue !== undefined) {
			map.set(s[x], Math.abs(sValue - x));
		} else {
			map.set(s[x], x);
		}

		let tValue = map.get(t[x]);
		if (tValue !== undefined) {
			map.set(t[x], Math.abs(tValue - x));
		} else {
			map.set(t[x], x);
		}
	}

	return [...map.values()].reduce((acc, curr) => acc + curr, 0);
}
