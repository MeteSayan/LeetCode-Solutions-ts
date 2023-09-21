/*
Rule
YZ = 25*(26^1) + 26*(26^0)
XYZ = 24*(26^2) + 25*(26^1) + 26*(26^0)

ASCII Table for chars
https://alpharithms.s3.amazonaws.com/assets/img/ascii-chart/ascii-table-alpharithms-scaled.jpg
*/

function titleToNumber(columnTitle: string): number {
	let total = 0;
	for (
		let x = 0, y = columnTitle.length - 1;
		x < columnTitle.length;
		x++, y--
	) {
		total += (columnTitle.charCodeAt(x) - 64) * 26 ** y;
	}

	return total;
}
