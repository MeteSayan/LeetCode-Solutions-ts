function getConcatenation(nums: number[]): number[] {
	nums.push(...nums);
	return nums;
}

// Another solution
// function getConcatenation(nums: number[]): number[] {
//     const len = nums.length;
//     let ans =   nums;

//     for (let i = 0; i < len; i++) {
//         ans[i + len] = nums[i];
//     }

//     return ans;
// };
