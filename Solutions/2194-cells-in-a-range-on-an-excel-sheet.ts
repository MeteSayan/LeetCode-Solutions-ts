// ASCII Table for chars
// https://alpharithms.s3.amazonaws.com/assets/img/ascii-chart/ascii-table-alpharithms-scaled.jpg

function cellsInRange(s: string): string[] {
	const colStart = s.charCodeAt(0);
	const rowStart = +s[1];
	const colEnd = s.charCodeAt(3);
	const rowEnd = +s[4];

	const arr: string[] = [];

	for (let x = colStart; x <= colEnd; x++) {
		for (let y = rowStart; y <= rowEnd; y++) {
			arr.push(String.fromCharCode(x) + y);
		}
	}

	return arr;
}
