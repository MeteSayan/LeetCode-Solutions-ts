function removeElement(nums: number[], val: number): number {
  for (let x = 0; x < nums.length; x++) {
    if (nums[x] == val) {
      nums.splice(x, 1);
      x--;
    }
  }

  return nums.length;
}
