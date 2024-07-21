function firstUniqChar(s: string): number {
	const map: Map<string, number> = new Map();
	const willDelete: string[] = [];

	for (let x = 0; x < s.length; x++) {
		if (map.has(s[x])) {
			willDelete.push(s[x]);
		} else {
			map.set(s[x], x);
		}
	}

	for (let [key, value] of map.entries()) {
		if (!willDelete.includes(key)) {
			return value;
		}
	}

	return -1;
}
