function sortByBits(arr: number[]): number[] {
	return arr.sort((a, b) => {
		const bitCountA = countBits(a);
		const bitCountB = countBits(b);

		if (bitCountA === bitCountB) {
			return a - b;
		} else {
			return bitCountA - bitCountB;
		}
	});
}

function countBits(num: number): number {
	let count = 0;
	while (num !== 0) {
		count += num & 1;
		num >>= 1;
	}
	return count;
}
