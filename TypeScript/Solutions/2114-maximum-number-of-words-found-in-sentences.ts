function mostWordsFound(sentences: string[]): number {
	let maxWords = 0;
	for (let i = 0; i < sentences.length; i++) {
		const words = sentences[i].split(' ');
		if (words.length > maxWords) {
			maxWords = words.length;
		}
	}

	return maxWords;
}
