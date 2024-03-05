function flipAndInvertImage(image: number[][]): number[][] {
	for (let x = 0; x < image.length; x++) {
		image[x] = image[x].reverse().map((i) => (i === 0 ? 1 : 0));
	}

	return image;
}
