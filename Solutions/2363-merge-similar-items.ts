function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
	const map: number[] = [];

	items1.forEach(
		([value, weight]) => (map[value] = (map[value] || 0) + weight)
	);
	items2.forEach(
		([value, weight]) => (map[value] = (map[value] || 0) + weight)
	);

	return Object.entries(map)
		.map(([value, weight]) => [+value, weight])
		.sort((a, b) => a[0] - b[0]);
}
