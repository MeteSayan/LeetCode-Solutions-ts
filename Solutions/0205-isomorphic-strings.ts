function isIsomorphic(s: string, t: string): boolean {
	if (s.length !== t.length) return false;
	let changedChars = {};
	let splittedS = s.split('');
	for (let x = 0; x < s.length; x++) {
		if (x == 0) {
			changedChars[splittedS[x]] = t[x];
			splittedS[x] = t[x];
		} else if (splittedS[x] in changedChars) {
			splittedS[x] = changedChars[splittedS[x]];
		} else {
			if (Object.values(changedChars).includes(t[x])) {
				splittedS[x] = '';
				break;
			}
			changedChars[splittedS[x]] = t[x];
			splittedS[x] = t[x];
		}
	}

	s = splittedS.join('');
	if (s == t) {
		return true;
	} else {
		return false;
	}
}
