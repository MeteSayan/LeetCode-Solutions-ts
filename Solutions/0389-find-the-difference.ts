function findTheDifference(s: string, t: string): string {
	const map1: Map<string, number> = new Map();
	const map2: Map<string, number> = new Map();
	let result = '';

	for (let x = 0; x < t.length; x++) {
		if (s[x]) map1.set(s[x], (map1.get(s[x]) || 0) + 1);
		map2.set(t[x], (map2.get(t[x]) || 0) + 1);
	}

	for (const [key, value] of map2) {
		if (!map1.has(key) || !(map1.get(key) == value)) {
			result = key;
			break;
		}
	}

	return result;
}
