function arrayRankTransform(arr: number[]): number[] {
	const result: number[] = [];
	const tempArr = [...arr];
	const map = new Map();
	let rank = 1;

	tempArr.sort((a, b) => a - b);

	for (let x = 0; x < tempArr.length; x++) {
		if (map.get(tempArr[x])) continue;
		map.set(tempArr[x], rank);
		rank++;
	}

	arr.forEach((num) => {
		result.push(map.get(num));
	});

	return result;
}
