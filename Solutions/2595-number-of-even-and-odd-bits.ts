function evenOddBit(n: number): [number, number] {
	let evenCount = 0;
	let oddCount = 0;
	let position = 0;

	while (n > 0) {
		if (n & 1) {
			if (position % 2 === 0) {
				evenCount++;
			} else {
				oddCount++;
			}
		}
		n >>= 1;
		position++;
	}

	return [evenCount, oddCount];
}
