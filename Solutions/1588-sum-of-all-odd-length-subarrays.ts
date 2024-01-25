function sumOddLengthSubarrays(arr: number[]): number {
	const n = arr.length;
	let sum = 0;

	for (let i = 0; i < n; i++) {
		const contribution = Math.ceil(((i + 1) * (n - i)) / 2);
		sum += contribution * arr[i];
	}

	return sum;
}
