function deleteGreatestValue(grid: number[][]): number {
	if (grid.length === 0 || grid[0].length === 0) return 0;

	let sortedGrid = grid.map((subArray) => subArray.sort((a, b) => b - a));
	let temp: number[] = new Array(sortedGrid[0].length).fill(0);

	for (let x = 0; x < sortedGrid.length; x++) {
		for (let y = 0; y < sortedGrid[x].length; y++) {
			temp[y] = Math.max(temp[y], sortedGrid[x][y]);
		}
	}

	return temp.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);
}
