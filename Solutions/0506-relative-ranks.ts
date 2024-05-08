function findRelativeRanks(score: number[]): string[] {
	const sortedArr = [...score].sort((a, b) => b - a);

	const rankMap = new Map<number, string>();
	for (let i = 0; i < sortedArr.length; i++) {
		if (i === 0) {
			rankMap.set(sortedArr[i], 'Gold Medal');
		} else if (i === 1) {
			rankMap.set(sortedArr[i], 'Silver Medal');
		} else if (i === 2) {
			rankMap.set(sortedArr[i], 'Bronze Medal');
		} else {
			rankMap.set(sortedArr[i], `${i + 1}`);
		}
	}

	return score.map((s) => rankMap.get(s)!);
}
