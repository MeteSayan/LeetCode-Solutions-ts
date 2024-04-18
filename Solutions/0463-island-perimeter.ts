function islandPerimeter(grid: number[][]): number {
	let perimeter = 0;
	const row = grid.length;
	const col = grid[0].length;

	for (let x = 0; x < row; x++) {
		for (let y = 0; y < col; y++) {
			if (grid[x][y] === 1) {
				perimeter += 4;
				if (x > 0 && grid[x - 1][y] === 1) perimeter -= 2;
				if (y > 0 && grid[x][y - 1] === 1) perimeter -= 2;
			}
		}
	}

	return perimeter;
}
