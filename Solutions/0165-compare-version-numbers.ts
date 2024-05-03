function compareVersion(version1: string, version2: string): number {
	const v1 = splitByDot(version1);
	const v2 = splitByDot(version2);
	const len = Math.max(v1.length, v2.length);

	for (let i = 0; i < len; i++) {
		const num1 = i < v1.length ? v1[i] : 0;
		const num2 = i < v2.length ? v2[i] : 0;

		if (num1 > num2) return 1;
		if (num1 < num2) return -1;
	}

	return 0;
}

const splitByDot = (version: string): number[] =>
	version.split('.').map(Number);
