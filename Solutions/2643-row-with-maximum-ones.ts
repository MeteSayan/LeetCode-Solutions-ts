const rowAndMaximumOnes = (mat: number[][]): number[] => {
	let maxRowIndex = 0;
	let maxOnes = 0;

	for (let x = 0; x < mat.length; x++) {
		let sumOfOnes = 0;

		for (let y = 0; y < mat[x].length; y++) {
			sumOfOnes += mat[x][y];
		}

		if (sumOfOnes > maxOnes) {
			maxOnes = sumOfOnes;
			maxRowIndex = x;
		}
	}

	return [maxRowIndex, maxOnes];
};
