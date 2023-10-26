function removeDuplicates(nums: number[]): number {
    let ct = 0;
    for (let x = 0; x < nums.length; x++) {
        if (nums[x] === nums[x + 1]) continue;

        nums[ct] = nums[x];
        ct++;
    }
    return ct;
};