function areOccurrencesEqual(s: string): boolean {
	const map = new Map<string, number>();

	for (let x = 0; x < s.length; x++) {
		map.set(s[x], (map.get(s[x]) || 0) + 1);
	}

	const set = new Set<number>();

	for (let val of map.values()) {
		set.add(val);
	}

	return set.size === 1;
}
