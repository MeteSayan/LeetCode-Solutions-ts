function relativeSortArray(arr1: number[], arr2: number[]): number[] {
	const priorityMap = new Map<number, number>();
	arr2.forEach((num, index) => priorityMap.set(num, index));

	return arr1.sort((a, b) => {
		const priorityA = priorityMap.get(a);
		const priorityB = priorityMap.get(b);

		if (priorityA !== undefined && priorityB !== undefined) {
			return priorityA - priorityB;
		} else if (priorityA !== undefined) {
			return -1;
		} else if (priorityB !== undefined) {
			return 1;
		} else {
			return a - b;
		}
	});
}
