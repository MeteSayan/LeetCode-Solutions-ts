function countPrefixes(words: string[], s: string): number {
	let ct = 0;

	for (const word of words) {
		if (s.startsWith(word)) {
			ct++;
		}
	}

	return ct;
}
