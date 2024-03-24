function uniqueOccurrences(arr: number[]): boolean {
	const map = new Map<number, number>();

	for (let x = 0; x < arr.length; x++) {
		map.set(arr[x], (map.get(arr[x]) || 0) + 1);
	}

	return map.size === new Set(map.values()).size;
}
