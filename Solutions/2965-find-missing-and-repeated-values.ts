function findMissingAndRepeatedValues(grid: number[][]): number[] {
	const map: Map<number, number> = new Map();
	let lengthOfValues = 0;
	const result: number[] = [];

	for (let x = 0; x < grid.length; x++) {
		for (let y = 0; y < grid[x].length; y++) {
			map.set(grid[x][y], (map.get(grid[x][y]) || 0) + 1);
			lengthOfValues++;
		}
	}

	for (let x = 1; x < lengthOfValues + 1; x++) {
		if (!map.has(x)) result.push(x);
		else if ((map.get(x) || 0) > 1) result.unshift(x);
	}

	return result;
}
