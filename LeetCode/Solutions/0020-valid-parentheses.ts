function isValid(s: string): boolean {
    const bracketsMap = new Map<string, string>(
        [
            ["(", ")"],
            ["{", "}"],
            ["[", "]"]
        ]
    );
    let expectedValues: string[] = [];
    for (let x = 0; x < s.length; x++) {
        if (bracketsMap.get(s[x]) !== undefined) expectedValues.push(bracketsMap.get(s[x])!);
        else {
            if (expectedValues[expectedValues.length - 1] == s[x]) {
                expectedValues.pop();
            } else {
                return false;
            }
        }
    }

    return expectedValues.length > 0 ? false : true;
};