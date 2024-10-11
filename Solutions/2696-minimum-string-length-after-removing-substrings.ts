function minLength(s: string): number {
	for (let x = 0; x < s.length; x++) {
		if (s[x] + s[x + 1] == 'AB' || s[x] + s[x + 1] == 'CD') {
			s = s.substring(0, x) + s.substring(x + 2, s.length);
			x -= 2;
		}
	}

	return s.length;
}
