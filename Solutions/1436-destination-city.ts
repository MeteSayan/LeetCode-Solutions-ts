function destCity(paths: string[][]): string {
	let destination = paths[0][1];

	for (let x = 0; x < paths.length; x++) {
		if (destination === paths[x][0]) {
			destination = paths[x][1];
			x = -1;
		}
	}

	return destination;
}
