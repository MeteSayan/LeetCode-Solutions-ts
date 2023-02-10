/* 
Solution 1
Time Complexity: O(n)
*/
function twoSumSolutonOne(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();
    let result: number[] = [];

    for (let x = 0; x < nums.length; x++) {
        const currentNumber = nums[x];
        const reqNumber = map.get(target - currentNumber);

        if (reqNumber !== undefined) {
            result = [x, reqNumber];
            break;
        }
        map.set(currentNumber, x);
    }

    return result;
};

/* 
Solution 2
Time Complexity: O(n²)
*/
function twoSumSolutionTwo(nums: number[], target: number): number[] {
    let result: number[] = [];
    for (let x = 0; x < nums.length; x++) {
        for (let y = 1; y < nums.length; y++) {
            if (nums[x] + nums[y] == target) {
                result = [x, y];
                break;
            }
        }
        if (result.length > 0) break;
    }
    return result;
};