function generate(numRows: number): number[][] {
	if (numRows === 0) return [];
	let result: number[][] = [];

	for (let x = 0; x < numRows; x++) {
		let row: number[] = [];

		for (let y = 0; y < x + 1; y++) {
			if (y === 0 || y === x) {
				row.push(1); // The first and last element in each row is always 1
			} else {
				let prevRowValue1 = result[x - 1][y - 1];
				let prevRowValue2 = result[x - 1][y];
				row.push(prevRowValue1 + prevRowValue2);
			}
		}

		result.push(row);
	}

	return result;
}
