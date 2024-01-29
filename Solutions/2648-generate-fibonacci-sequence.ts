//! The yield operator is used to pause and resume a generator function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
function* fibGenerator(): Generator<number, any, number> {
	let a = 0;
	let b = 1;
	while (true) {
		yield a;
		const temp = a;
		a = b;
		b = temp + b;
	}
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
