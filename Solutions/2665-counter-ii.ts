type ReturnObj = {
	increment: () => number;
	decrement: () => number;
	reset: () => number;
};

function createCounter(init: number): ReturnObj {
	let ct = init;
	return {
		increment: () => ++ct,
		decrement: () => --ct,
		reset: () => (ct = init),
	};
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
