function reformatDate(date: string): string {
	const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

	const dateParts = date.split(' ');
	let result = '';

	if (Number(dateParts[2]) >= 1900 && Number(dateParts[2]) <= 2100) {
		result += dateParts[2] + '-';
	}

	const monthIndex = months.indexOf(dateParts[1]) + 1;
	result += monthIndex < 10 ? `0${monthIndex}-` : `${monthIndex}-`;

	const dayOfDate = dateParts[0].substring(0, dateParts[0].length - 2);
	result += Number(dayOfDate) < 10 ? `0${dayOfDate}` : dayOfDate;

	return result;
}
