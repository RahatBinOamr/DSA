const nums = [4, 2, 5, 7];
var sortArrayByParityII = function (nums) {
  nums.sort((a, b) => (a % 2) - (b % 2));
  let result = [];
  let evenIndex = 0;
  let oddIndex = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result[evenIndex] = nums[i];
      evenIndex += 2;
    } else {
      result[oddIndex] = nums[i];
      oddIndex += 2;
    }
  }
  return result;
};
console.log(sortArrayByParityII(nums));
