var moveZeroes = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[k];
      nums[k] = nums[i];
      nums[i] = temp;
      k++;
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
