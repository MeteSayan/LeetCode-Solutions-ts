function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set(nums);
  const result: number[] = [];

  for (let x = 1; x < nums.length + 1; x++) {
    if (!set.has(x)) {
      result.push(x);
    }
  }

  return result;
}
