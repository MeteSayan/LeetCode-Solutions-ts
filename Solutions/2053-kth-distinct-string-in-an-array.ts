function kthDistinct(arr: string[], k: number): string {
	let ct = 0;
	let result = '';

	const map = new Map<string, number>();

	for (let x = 0; x < arr.length; x++) {
		if (!map.has(arr[x])) {
			map.set(arr[x], x);
		} else {
			map.set(arr[x], -1);
		}
	}

	for (let [key, value] of map.entries()) {
		if (value !== -1) {
			++ct;
			if (k === ct) {
				result = key;
			}
		}
	}

	return result;
}
