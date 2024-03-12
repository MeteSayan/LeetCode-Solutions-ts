function heightChecker(heights: number[]): number {
	const sortedHeights = [...heights].sort((a, b) => a - b);
	let ct = 0;

	for (let i = 0; i < heights.length; i++) {
		if (heights[i] !== sortedHeights[i]) {
			ct++;
		}
	}

	return ct;
}
