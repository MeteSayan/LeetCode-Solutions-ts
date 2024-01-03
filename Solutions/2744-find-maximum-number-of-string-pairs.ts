function maximumNumberOfStringPairs(words: string[]): number {
	let count: number = 0;

	for (let x = 0; x < words.length; x++) {
		const reversedStr = reverseStr(words[x]);
		for (let y = x + 1; y < words.length; y++) {
			if (x == y) continue;
			if (words[y] === reversedStr) {
				count++;
				break;
			}
		}
	}

	return count;
}

function reverseStr(str: string) {
	let reverseString: string = '';

	for (let char of str) {
		reverseString = char + reverseString;
	}
	return reverseString;
}

export {};
