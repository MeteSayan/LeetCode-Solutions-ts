function vowelStrings(words: string[], left: number, right: number): number {
	let ct: number = 0;
	const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
	right = Math.min(right, words.length - 1);

	for (let x: number = left; x <= right; x++) {
		if (
			words[x] &&
			vowels.has(words[x][0]) &&
			vowels.has(words[x][words[x].length - 1])
		) {
			ct++;
		}
	}

	return ct;
}
