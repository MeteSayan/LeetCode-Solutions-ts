function countStudents(students: number[], sandwiches: number[]): number {
	let count = 0;

	while (students.length > 0) {
		if (students[0] === sandwiches[0]) {
			students.shift();
			sandwiches.shift();
			count = 0;
		} else {
			students.push(students.shift() as number);
			count++;
		}

		if (count === students.length) {
			break;
		}
	}

	return students.length;
}
