function countAsterisks(s: string): number {
	let ct: number = 0;
	let bar: boolean = false;

	for (let str of s) {
		if (str === '|') bar = !bar;
		else if (!bar && str === '*') ct += 1;
	}
	return ct;
}
