function uniqueMorseRepresentations(words: string[]): number {
    const morseCode: string[] = [
        ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",
        ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",
        "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."
    ];

    const transformations: Set<string> = new Set<string>();
    for (const word of words) {
        let transformation = "";
        for (const char of word) {
            transformation += morseCode[char.charCodeAt(0) - 97];
        }
        transformations.add(transformation);
    }
    return transformations.size;
};