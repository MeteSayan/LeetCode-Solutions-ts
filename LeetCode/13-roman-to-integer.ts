function romanToInt(s: string): number {
    let result: number = 0;
    const romanMap = new Map<string, number>(
        [
            ["I", 1],
            ["V", 5],
            ["X", 10],
            ["L", 50],
            ["C", 100],
            ["D", 500],
            ["M", 1000]
        ]
    );

    for (let x = 0; x < s.length; x++) {
        if ((romanMap.get(s[x]) ?? 0) < (romanMap.get(s[x + 1]) ?? 0)) {
            result -= romanMap.get(s[x]) ?? 0;
        } else {
            result += romanMap.get(s[x]) ?? 0;
        }
    }

    return result;
};