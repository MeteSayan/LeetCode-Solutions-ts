function longestCommonPrefix(strs: string[]): string {
    if (strs.length == 0) return '';
    if (strs.length == 1) return strs[0];

    let prefix: string = '';
    for (let x = 1; x < strs.length; x++) {
        let maxLenght: number = Math.max(strs[x - 1].length, strs[x].length);
        let tempPrefixLength: number;

        tempPrefixLength = prefix.length == 0 ? maxLenght : prefix.length;
        prefix = '';
        for (let y = 0; y < tempPrefixLength; y++) {
            if (strs[x - 1][y] == strs[x][y]) {
                prefix += strs[x][y]
            } else {
                break;
            }
        }

        if (prefix === '') break;
    }
    return prefix;
};