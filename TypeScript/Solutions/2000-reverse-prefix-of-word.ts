function reversePrefix(word: string, ch: string): string {
	const indexOfChar = word.indexOf(ch);
	if (indexOfChar < 1) {
		return word;
	}

	return (
		word
			.substring(0, indexOfChar + 1)
			.split('')
			.reverse()
			.join('') + word.substring(indexOfChar + 1)
	);
}
