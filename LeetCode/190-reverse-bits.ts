function reverseBits(n: number): number {
	const nAsBits = n.toString(2);
	const reversedBits = parseInt(
		('0'.repeat(32 - nAsBits.length) + nAsBits).split('').reverse().join(''),
		2
	);
	return reversedBits;
}
