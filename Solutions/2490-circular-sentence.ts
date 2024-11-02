function isCircularSentence(sentence: string): boolean {
	if (sentence.charAt(0) !== sentence.charAt(sentence.length - 1)) return false;

	const arrOfSen: string[] = sentence.split(' ');

	for (let x = 0; x < arrOfSen.length - 1; x++) {
		if (arrOfSen[x].slice(-1) !== arrOfSen[x + 1].charAt(0)) {
			return false;
		}
	}

	return true;
}
