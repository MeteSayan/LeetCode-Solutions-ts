function isPalindrome(x: number): boolean {
    const reversedNum: number = Number(x.toString().split('').reverse().join(''));
    return reversedNum == x;
};