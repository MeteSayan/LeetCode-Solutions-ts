type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
	return function (...args: number[]) {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		this.timeout = setTimeout(() => fn(...args), t);
	};
}
