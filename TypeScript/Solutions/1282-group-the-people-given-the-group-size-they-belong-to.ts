function groupThePeople(groupSizes: number[]): number[][] {
	const groups: number[][] = [];
	const map: { [key: number]: number[] } = {};
	for (let i = 0; i < groupSizes.length; i++) {
		if (map[groupSizes[i]]) {
			map[groupSizes[i]].push(i);
		} else {
			map[groupSizes[i]] = [i];
		}
		if (map[groupSizes[i]].length === groupSizes[i]) {
			groups.push(map[groupSizes[i]]);
			map[groupSizes[i]] = [];
		}
	}
	return groups;
}
