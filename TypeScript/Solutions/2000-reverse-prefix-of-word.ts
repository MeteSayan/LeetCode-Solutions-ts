function reversePrefix(word: string, ch: string): string {
	const indexOfChar = word.indexOf(ch);
	if (indexOfChar < 1) {
		return word;
	}

	return (
		word
			.substring(0, indexOfChar + 1)
			.split('')
			.reverse()
			.join('') + word.substring(indexOfChar + 1)
	);
}

//! Solution 2
// function reversePrefix(word: string, ch: string): string {
// 	if (word.length === 1) return word;

// 	let result: string = '';
// 	const indexOfChar = word.indexOf(ch);

// 	if (indexOfChar === 0) return word;
// 	if (indexOfChar) {
// 		const str = [
// 			word.slice(0, indexOfChar + 1),
// 			word.slice(indexOfChar + 1, word.length),
// 		];
// 		const reversedStr = reverseStr(str[0]);
// 		result = reversedStr + str[1];
// 	}
// 	return result;
// }

// function reverseStr(str: string) {
// 	let reverseString: string = '';

// 	for (let char of str) {
// 		reverseString = char + reverseString;
// 	}
// 	return reverseString;
// }
