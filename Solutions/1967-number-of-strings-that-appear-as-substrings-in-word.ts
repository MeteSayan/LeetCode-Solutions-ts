function numOfStrings(patterns: string[], word: string): number {
	let ct = 0;

	for (let x = 0; x < patterns.length; x++) {
		if (word.includes(patterns[x])) {
			ct++;
		}
	}

	return ct;
}
