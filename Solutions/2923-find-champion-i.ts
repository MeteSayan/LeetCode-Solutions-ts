function findChampion(grid: number[][]): number {
	let max = 0;
	let team = -1;

	for (let x = 0; x < grid.length; x++) {
		let ct = 0;
		for (let y = 0; y < grid[0].length; y++) {
			if (grid[x][y] === 1) ct++;
		}

		if (max < ct) {
			max = ct;
			team = x;
		}
	}

	return team;
}
