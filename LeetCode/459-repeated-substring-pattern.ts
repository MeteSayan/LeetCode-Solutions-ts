function repeatedSubstringPattern(s: string): boolean {
	return s.repeat(2).slice(1, -1).includes(s);
}
