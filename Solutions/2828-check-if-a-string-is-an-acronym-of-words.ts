function isAcronym(words: string[], s: string): boolean {
	let word = '';

	for (let x = 0; x < words.length; x++) {
		word += words[x][0];
	}

	return word === s;
}
