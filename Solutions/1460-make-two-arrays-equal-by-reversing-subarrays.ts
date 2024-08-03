function canBeEqual(target: number[], arr: number[]): boolean {
	const targetSorted = target.sort((a, b) => a - b);
	const arrSorted = arr.sort((a, b) => a - b);

	return targetSorted.join('') === arrSorted.join('');
}
