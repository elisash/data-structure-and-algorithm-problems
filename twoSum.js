// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }

    hashMap.set(nums[i], i);
  }

  return []; // No solution found
}
