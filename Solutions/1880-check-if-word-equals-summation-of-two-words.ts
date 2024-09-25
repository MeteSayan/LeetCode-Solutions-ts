function isSumEqual(
	firstWord: string,
	secondWord: string,
	targetWord: string
): boolean {
	return (
		convertWordToNumber(firstWord) + convertWordToNumber(secondWord) ===
		convertWordToNumber(targetWord)
	);
}

function convertWordToNumber(word: string): number {
	let str = '';
	for (let x = 0; x < word.length; x++) {
		let ch = (word.charCodeAt(x) - 97).toString();
		str += ch;
	}
	return Number(str);
}
