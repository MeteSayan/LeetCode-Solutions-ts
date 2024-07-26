type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
	let currentIndex = 0;

	for (let x = 0; x < arr.length; x++) {
		if (fn(arr[x], x)) {
			arr[currentIndex] = arr[x];
			currentIndex++;
		}
	}

	arr.length = currentIndex;
	return arr;
}
