function getValue(s: string): number {
	const numS = Number(s);
	if (Number.isNaN(numS)) {
		return s.length;
	} else {
		return numS;
	}
}

function maximumValue(strs: string[]): number {
	return Math.max(...strs.map((s) => getValue(s)));
}
