class MyCalendarTwo {
	calendar: number[][] = [];
	overlaps: number[][] = [];

	constructor() {}

	book(start: number, end: number): boolean {
		for (let date of this.overlaps) {
			if (start < date[1] && end > date[0]) return false;
		}
		for (let date of this.calendar) {
			if (start < date[1] && end > date[0]) {
				this.overlaps.push([Math.max(date[0], start), Math.min(date[1], end)]);
			}
		}
		this.calendar.push([start, end]);
		return true;
	}
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
