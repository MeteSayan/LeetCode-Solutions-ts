function separateDigits(nums: number[]): number[] {
    const result: number[] = [];

    for (let x = 0; x < nums.length; x++) {
        const splittedNums = nums[x].toString().split('');
        result.push(...splittedNums.map(Number));
    }

    return result;
};