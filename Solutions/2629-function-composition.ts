type F = (x: number) => number;

function compose(functions: F[]): F {
	return function (x) {
		if (functions.length == 0) return x;

		for (let y = functions.length - 1; y >= 0; y--) {
			x = functions[y](x);
		}
		return x;
	};
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
