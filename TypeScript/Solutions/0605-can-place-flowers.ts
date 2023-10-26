function canPlaceFlowers(flowerbed: number[], n: number): boolean {
	let zeroct = 1; // First start can be [0 0 ...]
	let flowerPlaces = 0;

	for (let x = 0; x < flowerbed.length; x++) {
		if (x == flowerbed.length - 1 && zeroct == 1 && flowerbed[x] != 1) {
			// Working only on last number ex: [... 0 0]
			flowerPlaces++;
		} else if (flowerbed[x] == 1) {
			zeroct = 0;
		} else {
			zeroct += 1;

			if (zeroct == 3) {
				flowerPlaces += 1;
				zeroct = 1;
			}
		}
	}

	return flowerPlaces >= n ? true : false;
}
