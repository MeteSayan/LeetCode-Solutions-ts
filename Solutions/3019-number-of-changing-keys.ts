function countKeyChanges(s: string): number {
	const updatedString = s.toLowerCase();
	let ct = 0;
	for (let x = 1; x < updatedString.length; x++) {
		if (updatedString[x] !== updatedString[x - 1]) {
			ct++;
		}
	}

	return ct;
}
