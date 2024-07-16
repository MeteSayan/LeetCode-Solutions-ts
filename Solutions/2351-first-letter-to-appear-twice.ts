function repeatedCharacter(s: string): string {
	let result = '';
	if (s.length < 2) return result;

	const set = new Set();

	for (let x = 0; x < s.length; x++) {
		if (set.has(s[x])) {
			result = s[x];
			break;
		} else {
			set.add(s[x]);
		}
	}

	return result;
}
