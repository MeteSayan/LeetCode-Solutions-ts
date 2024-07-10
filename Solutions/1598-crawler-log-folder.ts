function minOperations(logs: string[]): number {
	let ct = 0;

	for (let x = 0; x < logs.length; x++) {
		if (logs[x] == '../') {
			if (ct != 0) ct--;
		} else if (logs[x] == './') {
			continue;
		} else {
			ct++;
		}
	}

	return ct;
}
