package Java.LeetCode;

import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        int n = nums.length;

        for (int x = 0; x < n; x++) {
            int complement = target - nums[x];
            if (numMap.containsKey(complement)) {
                return new int[] { numMap.get(complement), x };
            }
            numMap.put(nums[x], x);
        }

        return new int[] {};
    }
}