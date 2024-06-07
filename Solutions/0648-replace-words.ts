function replaceWords(dictionary: string[], sentence: string): string {
	const sortedArray = dictionary.sort((a, b) => a.length - b.length);
	const splittedSentences = sentence.split(' ');
	let result = '';

	for (let x = 0; x < splittedSentences.length; x++) {
		let found = false;
		for (let y = 0; y < sortedArray.length; y++) {
			if (splittedSentences[x].startsWith(sortedArray[y])) {
				result += sortedArray[y] + ' ';
				found = true;
				break;
			}
		}

		if (found == false) result += splittedSentences[x] + ' ';
	}

	return result.trim();
}
