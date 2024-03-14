function canBeTypedWords(text: string, brokenLetters: string): number {
	let ct = 0;
	const words = text.split(' ');

	for (let x = 0; x < words.length; x++) {
		for (let y = 0; y < brokenLetters.length; y++) {
			if (words[x].includes(brokenLetters[y])) {
				ct++;
				break;
			}
		}
	}

	return words.length - ct;
}
