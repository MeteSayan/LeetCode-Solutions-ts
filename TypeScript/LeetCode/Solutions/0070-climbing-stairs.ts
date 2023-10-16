/* 
If we add different numbers to the test and look at the progress carefully, we will see a structure similar to Fibonacci numbers.
1 => 1
2 => 2
3 => 3
4 => 5
5 => 8
6 => 13
7 => 21

Fibonacci numbers has the formula Fn = Fn-1 + Fn-2
This formula will help us.
*/

// Solution 1
const cache: number[] = [];
function climbStairs(n: number): number {
	if (n <= 2) return n;

	if (!cache[n]) cache[n] = climbStairs(n - 1) + climbStairs(n - 2);

	return cache[n];
}

// Solution 2
function climbStairs2(n: number): number {
	let first = 0;
	let second = 1;

	for (let x = 0; x < n; x++) {
		let third = first + second; //Fn = Fn-2 + Fn-1
		first = second; // Fn-2 = Fn-1
		second = third; // Fn-1 = Fn
	}

	return second;
}
