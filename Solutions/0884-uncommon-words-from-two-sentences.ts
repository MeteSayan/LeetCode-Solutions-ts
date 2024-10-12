function uncommonFromSentences(s1: string, s2: string): string[] {
	const wordCount = new Map<string, number>();

	const addWords = (sentence: string) => {
		sentence.split(' ').forEach((word) => {
			wordCount.set(word, (wordCount.get(word) || 0) + 1);
		});
	};

	addWords(s1);
	addWords(s2);

	const result: string[] = [];
	wordCount.forEach((count, word) => {
		if (count === 1) {
			result.push(word);
		}
	});

	return result;
}
