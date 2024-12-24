function stableMountains(height: number[], threshold: number): number[] {
	const result: number[] = [];

	for (let x = 0; x < height.length; x++) {
		if (height[x - 1] > threshold) {
			result.push(x);
		}
	}

	return result;
}
