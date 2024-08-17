function findWords(words: string[]): string[] {
	const result: string[] = [];

	for (const word of words) {
		const keysOfWord = [...new Set(word.toLowerCase())];

		const isInFirst = keysOfWord
			.map((e) => 'qwertyuiop'.includes(e))
			.every((e) => e);
		const isInSecond = keysOfWord
			.map((e) => 'asdfghjkl'.includes(e))
			.every((e) => e);
		const isInThird = keysOfWord
			.map((e) => 'zxcvbnm'.includes(e))
			.every((e) => e);

		if (isInFirst || isInSecond || isInThird) result.push(word);
	}

	return result;
}
