function minimumPushes(word: string): number {
	const arr = new Array(26).fill(0);
	let res = 0;

	for (let char of word) {
		arr[char.charCodeAt(0) - 97]++;
	}

	arr.sort((a, b) => b - a);

	for (let x = 0; x < arr.length; x++) {
		res += arr[x] * (Math.floor(x / 8) + 1);
	}

	return res;
}
