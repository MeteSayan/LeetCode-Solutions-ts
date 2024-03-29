function checkIfExist(arr: number[]): boolean {
	const numSet = new Set<number>();

	for (const num of arr) {
		if (numSet.has(num * 2) || (num % 2 === 0 && numSet.has(num / 2))) {
			return true;
		}
		numSet.add(num);
	}

	return false;
}
