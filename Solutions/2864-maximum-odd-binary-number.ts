function maximumOddBinaryNumber(s: string): string {
    return s.split('').sort((a: string, b: string) => Number(b) - Number(a)).slice(1).join('') + "1"
};