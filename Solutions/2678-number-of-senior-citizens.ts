function countSeniors(details: string[]): number {
	let ct = 0;

	for (let x = 0; x < details.length; x++) {
		if (
			Number(
				details[x][details[x].length - 4] + details[x][details[x].length - 3]
			) > 60
		) {
			ct++;
		}
	}

	return ct;
}
