function countNegatives(grid: number[][]): number {
	const flatGrid = grid.flat();
	let ct = 0;

	for (let x = 0; x < flatGrid.length; x++) {
		if (flatGrid[x] < 0) ct++;
	}

	return ct;
}
