function lengthOfLongestSubstring(s: string): number {
    let currentString: string[] = [];
    let longestStringLength: number = 0;

    for (let i: number = 0; i < s.length; i++) {
        const currentCharacterPosition: number = currentString.indexOf(s[i]);
        if (currentCharacterPosition !== -1) {
            currentString.splice(0, currentCharacterPosition + 1);
        }

        currentString.push(s[i]);
        longestStringLength = Math.max(longestStringLength, currentString.length);
    }
    return longestStringLength;
};