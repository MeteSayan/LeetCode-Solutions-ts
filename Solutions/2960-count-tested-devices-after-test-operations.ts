function countTestedDevices(batteryPercentages: number[]): number {
	let ct = 0;

	for (let x = 0; x < batteryPercentages.length; x++) {
		if (batteryPercentages[x] > 0) {
			ct++;
			for (let y = x + 1; y < batteryPercentages.length; y++) {
				batteryPercentages[y] = Math.max(0, batteryPercentages[y] - 1);
			}
		}
	}

	return ct;
}
