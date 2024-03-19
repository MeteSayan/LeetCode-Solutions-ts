function countCharacters(words: string[], chars: string): number {
	const charCount: { [key: string]: number } = {};
	let result = 0;

	for (const char of chars) {
		charCount[char] = (charCount[char] || 0) + 1;
	}

	for (const word of words) {
		const wordCount: { [key: string]: number } = {};
		let valid = true;

		for (const char of word) {
			wordCount[char] = (wordCount[char] || 0) + 1;

			if (!charCount[char] || wordCount[char] > charCount[char]) {
				valid = false;
				break;
			}
		}

		if (valid) {
			result += word.length;
		}
	}

	return result;
}
