function sortPeople(names: string[], heights: number[]): string[] {
	let nameAndHeights: [string, number][] = names.map((name, index) => [
		name,
		heights[index],
	]);

	nameAndHeights.sort((a, b) => b[1] - a[1]);

	return nameAndHeights.map((item) => item[0]);
}
