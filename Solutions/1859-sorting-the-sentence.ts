function sortSentence(s: string): string {
	let arrayOfS = s.split(' ');
	const arrayOfResult = new Array(arrayOfS.length).fill('');

	for (let x = 0; x < arrayOfS.length; x++) {
		const word = arrayOfS[x];
		arrayOfResult[word[word.length - 1]] = word.substring(0, word.length - 1);
	}

	return arrayOfResult.join(' ').trim();
}
