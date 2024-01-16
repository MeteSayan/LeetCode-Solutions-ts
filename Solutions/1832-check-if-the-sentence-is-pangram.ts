function checkIfPangram(sentence: string): boolean {
	let ct = 0;
	const dubRemoved = [...new Set(sentence.split(''))].join('');

	for (let x = 0; x < dubRemoved.length; x++) {
		if (dubRemoved.charCodeAt(x) >= 97 && dubRemoved.charCodeAt(x) <= 122) ct++;
	}

	return ct === 26;
}
