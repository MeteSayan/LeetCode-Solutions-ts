function judgeCircle(moves: string): boolean {
	let resultArr = [0, 0];

	for (let x = 0; x < moves.length; x++) {
		if (moves[x] == 'R') {
			resultArr[0] = resultArr[0] + 1;
		} else if (moves[x] == 'L') {
			resultArr[0] = resultArr[0] - 1;
		} else if (moves[x] == 'U') {
			resultArr[1] = resultArr[1] + 1;
		} else if (moves[x] == 'D') {
			resultArr[1] = resultArr[1] - 1;
		}
	}

	return resultArr[0] === 0 && resultArr[1] === 0;
}
