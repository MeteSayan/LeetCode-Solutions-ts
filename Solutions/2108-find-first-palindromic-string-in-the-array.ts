function firstPalindrome(words: string[]): string {
	let result = '';

	for (let x = 0; x < words.length; x++) {
		if (words[x] === words[x].split('').reverse().join('')) {
			result = words[x];
			break;
		}
	}

	return result;
}
