function luckyNumbers(matrix: number[][]): number[] {
	const result: number[] = [];
	const minNumbersInRows: number[] = new Array(matrix.length).fill(Infinity);
	const maxNumbersInColumns: number[] = new Array(matrix[0].length).fill(
		-Infinity
	);

	for (let x = 0; x < matrix.length; x++) {
		for (let y = 0; y < matrix[x].length; y++) {
			if (matrix[x][y] < minNumbersInRows[x]) {
				minNumbersInRows[x] = matrix[x][y];
			}
			if (matrix[x][y] > maxNumbersInColumns[y]) {
				maxNumbersInColumns[y] = matrix[x][y];
			}
		}
	}

	for (let x = 0; x < matrix.length; x++) {
		for (let y = 0; y < matrix[x].length; y++) {
			if (
				matrix[x][y] === minNumbersInRows[x] &&
				matrix[x][y] === maxNumbersInColumns[y]
			) {
				result.push(matrix[x][y]);
			}
		}
	}

	return result;
}
