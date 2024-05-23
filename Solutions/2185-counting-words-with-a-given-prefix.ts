function prefixCount(words: string[], pref: string): number {
	let ct = 0;

	for (let x = 0; x < words.length; x++) {
		if (words[x].startsWith(pref)) {
			ct++;
		}
	}

	return ct;
}
