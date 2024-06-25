function minimizedStringLength(s: string): number {
	return new Set<string>(s).size;
}
