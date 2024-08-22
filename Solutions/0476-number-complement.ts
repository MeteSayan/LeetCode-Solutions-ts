function findComplement(num: number): number {
	const numBinArr = num.toString(2).split('');
	return parseInt(
		numBinArr
			.map((s) => {
				return s == '1' ? 1 : 0;
			})
			.join(''),
		2
	);
}
